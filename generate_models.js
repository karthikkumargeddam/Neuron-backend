const fs = require('fs');
const path = require('path');

const models = [
  {
    singular: 'model-registry',
    plural: 'model-registries',
    displayName: 'Model Registry',
    attributes: {
      name: { type: 'string', required: true },
      description: { type: 'text', required: true },
      framework: { type: 'string', required: true },
      architecture: { type: 'string' },
      downloads: { type: 'integer', default: 0 },
      likes: { type: 'integer', default: 0 },
      isPublic: { type: 'boolean', default: true },
      author: { type: 'relation', relation: 'manyToOne', target: 'plugin::users-permissions.user' }
    }
  },
  {
    singular: 'research-paper',
    plural: 'research-papers',
    displayName: 'Research Paper',
    attributes: {
      title: { type: 'string', required: true },
      abstract: { type: 'text', required: true },
      authors: { type: 'string', required: true },
      arxivId: { type: 'string', required: true },
      pdfUrl: { type: 'string', required: true },
      publishedDate: { type: 'date' }
    }
  },
  {
    singular: 'rlhf-task',
    plural: 'rlhf-tasks',
    displayName: 'RLHF Task',
    attributes: {
      title: { type: 'string', required: true },
      description: { type: 'text', required: true },
      datasetType: { type: 'string' },
      rewardPoints: { type: 'integer', default: 10 },
      prompt: { type: 'text' },
      modelA_output: { type: 'text' },
      modelB_output: { type: 'text' },
      chosenModel: { type: 'string' },
      user: { type: 'relation', relation: 'manyToOne', target: 'plugin::users-permissions.user' }
    }
  },
  {
    singular: 'compute-host',
    plural: 'compute-hosts',
    displayName: 'Compute Host',
    attributes: {
      gpuType: { type: 'string', required: true },
      vram: { type: 'integer', required: true },
      ram: { type: 'integer', required: true },
      hourlyRate: { type: 'decimal', required: true },
      isAvailable: { type: 'boolean', default: true },
      ipAddress: { type: 'string' },
      hostUser: { type: 'relation', relation: 'manyToOne', target: 'plugin::users-permissions.user' }
    }
  }
];

const basePath = path.join(__dirname, 'src', 'api');

models.forEach(model => {
  const dirPath = path.join(basePath, model.singular);
  
  // Create directories
  fs.mkdirSync(path.join(dirPath, 'content-types', model.singular), { recursive: true });
  fs.mkdirSync(path.join(dirPath, 'controllers'), { recursive: true });
  fs.mkdirSync(path.join(dirPath, 'routes'), { recursive: true });
  fs.mkdirSync(path.join(dirPath, 'services'), { recursive: true });

  // 1. Schema
  const schema = {
    kind: "collectionType",
    collectionName: model.plural.replace(/-/g, '_'),
    info: {
      singularName: model.singular,
      pluralName: model.plural,
      displayName: model.displayName
    },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: model.attributes
  };
  fs.writeFileSync(
    path.join(dirPath, 'content-types', model.singular, 'schema.json'),
    JSON.stringify(schema, null, 2)
  );

  // 2. Controller
  const controller = `'use strict';\n\nconst { createCoreController } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreController('api::${model.singular}.${model.singular}');\n`;
  fs.writeFileSync(path.join(dirPath, 'controllers', `${model.singular}.js`), controller);

  // 3. Route
  const route = `'use strict';\n\nconst { createCoreRouter } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreRouter('api::${model.singular}.${model.singular}');\n`;
  fs.writeFileSync(path.join(dirPath, 'routes', `${model.singular}.js`), route);

  // 4. Service
  const service = `'use strict';\n\nconst { createCoreService } = require('@strapi/strapi').factories;\n\nmodule.exports = createCoreService('api::${model.singular}.${model.singular}');\n`;
  fs.writeFileSync(path.join(dirPath, 'services', `${model.singular}.js`), service);

  console.log(`Created ${model.singular} API.`);
});
