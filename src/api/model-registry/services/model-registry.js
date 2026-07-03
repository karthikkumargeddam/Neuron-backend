'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::model-registry.model-registry');
