'use strict';
const { createCoreController } = require('@strapi/strapi').factories;
const axios = require('axios');

module.exports = createCoreController('api::agent.agent', ({ strapi }) => ({
  async run(ctx) {
    const { prompt, max_tokens = 256 } = ctx.request.body;
    try {
      const response = await axios.post('http://localhost:8000/generate', {
        prompt,
        max_tokens
      });
      ctx.send({ generated_text: response.data.generated_text });
    } catch (err) {
      ctx.throw(502, err.message);
    }
  }
}));
