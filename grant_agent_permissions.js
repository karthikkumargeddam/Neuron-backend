const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

async function grantPermissions() {
  await client.connect();
  try {
    const resRole = await client.query("SELECT id FROM up_roles WHERE type = 'public'");
    if (resRole.rows.length === 0) throw new Error('Public role not found');
    const roleId = resRole.rows[0].id;

    const actions = [
      'api::agent.agent.find',
      'api::agent.agent.findOne',
      'api::agent.agent.create',
      'api::agent.agent.update',
      'api::agent.agent.delete'
    ];

    for (const action of actions) {
      let permId;
      const resPerm = await client.query("SELECT id FROM up_permissions WHERE action = $1", [action]);
      if (resPerm.rows.length === 0) {
        const insertPerm = await client.query("INSERT INTO up_permissions (action, created_at, updated_at) VALUES ($1, NOW(), NOW()) RETURNING id", [action]);
        permId = insertPerm.rows[0].id;
      } else {
        permId = resPerm.rows[0].id;
      }

      // Check the exact link table name
      const resLink = await client.query("SELECT * FROM up_permissions_role_lnk WHERE permission_id = $1 AND role_id = $2", [permId, roleId]);
      if (resLink.rows.length === 0) {
        await client.query("INSERT INTO up_permissions_role_lnk (permission_id, role_id) VALUES ($1, $2)", [permId, roleId]);
        console.log(`Granted ${action} to public role`);
      } else {
        console.log(`${action} already granted to public role`);
      }
    }
    console.log('✅ Public permissions granted for agent.');
  } catch (err) {
    console.error('Error granting permissions:', err);
  } finally {
    await client.end();
  }
}
grantPermissions();
