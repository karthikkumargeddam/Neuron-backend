module.exports = (plugin) => {
  const originalRegister = plugin.controllers.auth.register;
  
  plugin.controllers.auth.register = async (ctx) => {
    try {
      await originalRegister(ctx);
    } catch (err) {
      console.error("REGISTER CRASHED:", err);
      // Instead of throwing a 500 Internal Server Error, we catch it 
      // and send the exact error message to the frontend as a 400 Bad Request
      // so we can see exactly what is broken in production!
      return ctx.badRequest("Registration Error", { 
        exact_cause: err.message, 
        stack: err.stack 
      });
    }
  };
  plugin.controllers.user.startTrial = async (ctx) => {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('You must be logged in to start a trial.');
    }

    if (user.hasUsedTrial) {
      return ctx.badRequest('You have already used your free trial.');
    }

    const now = new Date();
    const validUntil = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

    try {
      const updatedUser = await strapi.entityService.update('plugin::users-permissions.user', user.id, {
        data: {
          isPro: true,
          hasUsedTrial: true,
          proValidFrom: now,
          proValidUntil: validUntil,
        },
      });
      return ctx.send({ message: 'Trial activated successfully', user: updatedUser });
    } catch (err) {
      console.error('Error starting trial:', err);
      return ctx.internalServerError('Could not activate trial.');
    }
  };

  plugin.routes['content-api'].routes.push({
    method: 'POST',
    path: '/users/start-trial',
    handler: 'user.startTrial',
    config: {
      prefix: '',
      policies: [],
    },
  });
  
  return plugin;
};
