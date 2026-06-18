module.exports = {
  async testInsert(ctx) {
    try {
      const username = "testdb_" + Date.now();
      const email = username + "@example.com";
      
      // Attempt to directly insert a user bypassing the users-permissions plugin entirely
      const user = await strapi.db.query('plugin::users-permissions.user').create({
        data: {
          username,
          email,
          password: "Password123!",
          confirmed: true,
          provider: 'local'
        }
      });
      
      ctx.send({ success: true, message: "Database insert worked perfectly!", user });
    } catch (err) {
      console.error("TESTDB CRASH:", err);
      ctx.badRequest("Database Insert Failed", { message: err.message, stack: err.stack });
    }
  }
};
