const { Resend } = require('resend');

// Initialize Resend with a placeholder or env variable key
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

module.exports = {
  async afterCreate(event) {
    const { result } = event;

    try {
      console.log(`[Lifecycle] New user signed up: ${result.email}. Triggering Welcome Email.`);

      // Send the immediate Welcome Email
      await resend.emails.send({
        from: 'Karthik from NeuronLabs <karthik@neuronlabs.online>',
        to: result.email,
        subject: 'Welcome to NeuronLabs! 🚀',
        html: `
          <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto;">
            <h2>Hey ${result.username}, welcome to NeuronLabs!</h2>
            <p>I built this platform because I was tired of spending hours configuring CUDA drivers and Docker containers just to test a simple model.</p>
            <p>Here's what you can do right now:</p>
            <ul>
              <li>Launch a <b>Virtual Sandbox</b> to write Python in the cloud.</li>
              <li>Explore our <b>Interactive WebGL</b> simulations.</li>
              <li>Practice FAANG <b>System Design</b> interviews with AI.</li>
            </ul>
            <p>To celebrate you joining, I'm giving you a <b>7-Day Free Trial</b> to our Pro tier. No credit card required.</p>
            <a href="https://neuronlabs.online" style="display: inline-block; padding: 12px 24px; background-color: #06b6d4; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 16px;">Start Your Free Trial</a>
            <p style="margin-top: 32px; font-size: 14px; color: #666;">If you have any questions, just reply to this email. I read every single one.</p>
            <p style="font-size: 14px; color: #666;">- Karthik</p>
          </div>
        `,
      });

      console.log(`[Lifecycle] Welcome Email successfully sent to ${result.email}.`);

      // ----------------------------------------------------------------------
      // Note for future: Implementing Day 3 and Day 5 drip campaigns.
      // In a production environment, instead of setTimeouts, we would either:
      // 1. Create a "DripCampaign" Strapi entity with a scheduled date and a CRON job.
      // 2. Use Resend's Audience/Broadcast API or a tool like Customer.io.
      // 
      // For demonstration, here is the boilerplate logic for follow-ups:
      // ----------------------------------------------------------------------
      
      /*
      // Day 3 "Did you know?" Email
      setTimeout(async () => {
        const currentUser = await strapi.entityService.findOne('plugin::users-permissions.user', result.id);
        if (!currentUser.hasUsedTrial) {
          await resend.emails.send({
            from: 'Karthik from NeuronLabs <karthik@neuronlabs.online>',
            to: result.email,
            subject: 'Did you know you have an unused Free Trial? 👀',
            html: '<p>Hey, I noticed you haven\'t claimed your 7-Day Free Trial yet...</p>'
          });
        }
      }, 3 * 24 * 60 * 60 * 1000); // 3 Days
      */

    } catch (err) {
      console.error('[Lifecycle] Error sending automated email sequence:', err);
    }
  },
};
