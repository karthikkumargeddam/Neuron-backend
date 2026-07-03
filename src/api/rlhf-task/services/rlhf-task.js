'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rlhf-task.rlhf-task');
