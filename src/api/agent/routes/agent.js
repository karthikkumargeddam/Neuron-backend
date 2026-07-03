module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/agent/run',
      handler: 'agent.run',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};
