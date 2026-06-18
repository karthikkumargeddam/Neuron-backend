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
  
  return plugin;
};
