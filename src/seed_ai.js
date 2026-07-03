module.exports = async (strapi) => {
    console.log('Seeding AI, AGI, ASI content...');

    const articles = [
        {
          title: 'The Evolution of AI: From Narrow to General',
          content: 'Artificial Intelligence (AI) has made incredible strides over the last decade. While Narrow AI excels at specific tasks like playing chess or generating text, the ultimate goal is Artificial General Intelligence (AGI) - systems that possess human-like cognitive abilities across a wide range of unconstrained domains. The transition will require breakthroughs in neuro-symbolic AI and continuous learning.',
          author: 'Dr. Alan Turing',
          cover_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        },
        {
          title: 'Understanding AGI: The Next Frontier',
          content: 'Artificial General Intelligence (AGI) refers to an autonomous system capable of understanding, learning, and applying intelligence broadly, much like a human. It represents a monumental leap from current LLMs and predictive models. Key milestones for AGI include unsupervised causal reasoning, robust transfer learning, and the ability to formulate abstractions from sparse data.',
          author: 'Dr. John McCarthy',
          cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
        },
        {
          title: 'Beyond AGI: What is Artificial Superintelligence (ASI)?',
          content: 'Artificial Superintelligence (ASI) is a hypothetical AI that doesn\'t just mimic human intelligence but fundamentally surpasses the brightest human minds in every conceivable field—from scientific creativity to social skills. Nick Bostrom defines it as an intellect that is much smarter than the best human brains in practically every field. Preparing for ASI requires solving the "Alignment Problem" before intelligence explodes.',
          author: 'Dr. Nick Bostrom',
          cover_image: 'https://images.unsplash.com/photo-1610555356070-d0efb6505f81',
        }
      ];
    
      const courses = [
        {
          title: 'The Path to AGI and Superintelligence',
          uuid: 'course-agi-asi',
          level: 'PhD',
          description: 'An advanced PhD-level course exploring the theoretical frameworks, modern architectures, and safety alignment problems associated with building Artificial General Intelligence (AGI) and Artificial Superintelligence (ASI).',
          modules: [
            { name: "Module 1: Foundations of Cognitive Architectures", duration: "2 weeks" },
            { name: "Module 2: Self-improving Systems and Meta-Learning", duration: "3 weeks" },
            { name: "Module 3: Mathematical Formalization of AGI", duration: "3 weeks" },
            { name: "Module 4: Alignment, Ethics, and ASI Containment", duration: "4 weeks" }
          ],
        }
      ];

      for (const article of articles) {
          try {
            const existingList = await strapi.documents('api::article.article').findMany({ filters: { title: article.title } });
            if (!existingList || existingList.length === 0) {
                await strapi.documents('api::article.article').create({ data: article, status: 'published' });
                console.log(`Created article: ${article.title}`);
            }
          } catch(e) {
              console.log('Error creating article:', e.message);
          }
      }

      for (const course of courses) {
          try {
            const existingList = await strapi.documents('api::course.course').findMany({ filters: { uuid: course.uuid } });
            if (!existingList || existingList.length === 0) {
                await strapi.documents('api::course.course').create({ data: course, status: 'published' });
                console.log(`Created course: ${course.title}`);
            }
          } catch(e) {
              console.log('Error creating course:', e.message);
          }
      }

      // Ensure public read access for articles
      const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
      if (publicRole) {
          const articleActions = ['api::article.article.find', 'api::article.article.findOne'];
          for (const action of articleActions) {
              const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
                  where: { action, role: publicRole.id }
              });
              if (!existing) {
                  await strapi.db.query('plugin::users-permissions.permission').create({
                      data: { action, role: publicRole.id }
                  });
                  console.log(`Granted ${action} to public role`);
              }
          }
      }
};
