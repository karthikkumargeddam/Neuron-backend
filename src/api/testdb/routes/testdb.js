module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/testdb',
      handler: 'testdb.testInsert',
      config: {
        auth: false,
      },
    },
  ],
};
