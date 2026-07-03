'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::model-registry.model-registry');
