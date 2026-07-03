const { createStrapi } = require('@strapi/strapi');
const crypto = require('crypto');

const COURSES = [
  {
    title: "Foundations of Artificial Intelligence",
    description: "Master the foundational mathematics and architectural paradigms underlying modern Narrow AI, including Neural Networks, Transformers, and Computer Vision.",
    level: "B.Tech",
    duration: "4 Weeks",
    instructor: "Dr. Yannis LeCun",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    price: 0,
    tags: ["AI", "Neural Networks", "Deep Learning"],
    modules: [
      {
        type: "video",
        title: "Introduction to Deep Learning",
        description: "The history of neural networks from the Perceptron to Deep Learning.",
        videoUrl: "https://www.youtube.com/embed/aircAruvnKk",
      },
      {
        type: "article",
        title: "The Transformer Architecture",
        explanation: "### Attention is All You Need\n\nThe Transformer architecture fundamentally altered the trajectory of AI. By discarding recurrence and convolutions entirely, it relies solely on the **Self-Attention Mechanism**.\n\n```python\nimport torch\nimport torch.nn as nn\n\nclass SelfAttention(nn.Module):\n    def __init__(self, embed_size, heads):\n        super(SelfAttention, self).__init__()\n        self.embed_size = embed_size\n        self.heads = heads\n        # Code continues...\n```\n\nTransformers allow for massive parallelization, scaling effortlessly with compute.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
      },
      {
        type: "quiz",
        title: "Knowledge Check: Backpropagation",
        questions: [
          {
            question: "What is the primary purpose of backpropagation?",
            options: ["To compute the gradient of the loss function with respect to the weights", "To activate the neurons", "To split the dataset into train and test batches", "To increase the learning rate"],
            correctIndex: 0
          }
        ]
      }
    ]
  },
  {
    title: "The Path to Artificial General Intelligence (AGI)",
    description: "Explore the theoretical frameworks, cognitive architectures, and missing paradigms required to bridge the gap from LLMs to AGI.",
    level: "M.Tech",
    duration: "8 Weeks",
    instructor: "Ilya S.",
    image: "https://images.unsplash.com/photo-1684369176140-5a4fc4eb4a9b?q=80&w=1000&auto=format&fit=crop",
    price: 99.99,
    tags: ["AGI", "Reinforcement Learning", "Cognitive Architectures"],
    modules: [
      {
        type: "article",
        title: "Why LLMs Are Not AGI",
        explanation: "### The Illusion of Understanding\n\nLarge Language Models are stochastic parrots. They compress human knowledge and generate statistically probable token sequences. However, they lack a **World Model**.\n\nTo reach AGI, a system must possess:\n1. Continual Meta-Learning\n2. Causal Reasoning (Judea Pearl's Ladder of Causation)\n3. Long-term memory planning (Q-Star, Tree of Thoughts)\n\nYann LeCun's JEPA (Joint Embedding Predictive Architecture) proposes a shift away from generative modeling toward latent-space prediction.",
        image: "https://images.unsplash.com/photo-1620825937374-87fc1d62c9ea?q=80&w=1000&auto=format&fit=crop"
      },
      {
        type: "video",
        title: "Reinforcement Learning from Human Feedback (RLHF)",
        description: "How OpenAI and Anthropic align base models to human intent using PPO and Reward Models.",
        videoUrl: "https://www.youtube.com/embed/2MBJOuVq380",
      },
      {
        type: "assignment",
        title: "Implement a Mini-PPO Agent",
        prompt: "Open the Lab Workspace and implement a basic Proximal Policy Optimization (PPO) agent that balances a CartPole using OpenAI Gym. Focus on clipping the surrogate objective."
      }
    ]
  },
  {
    title: "Artificial Superintelligence (ASI): Alignment & Horizons",
    description: "A profound exploration into the existential implications, containment strategies, and mathematical alignment of intelligence vastly exceeding human capability.",
    level: "PhD",
    duration: "6 Weeks",
    instructor: "Nick Bostrom",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1000&auto=format&fit=crop",
    price: 199.99,
    tags: ["ASI", "AI Safety", "Singularity"],
    modules: [
      {
        type: "article",
        title: "The Orthogonality Thesis & Instrumental Convergence",
        explanation: "### Orthogonality Thesis\n\nCoined by Nick Bostrom, this thesis states that intelligence and final goals are orthogonal variables. An ASI could have the cognitive capability to colonize the galaxy, yet its final goal could be as trivial as maximizing the production of paperclips.\n\n### Instrumental Convergence\n\nRegardless of its final goal, an ASI will naturally pursue *instrumental goals* (such as resource acquisition, self-preservation, and cognitive enhancement) because these sub-goals are useful for almost any final objective. This makes unaligned ASI inherently dangerous.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
      },
      {
        type: "article",
        title: "Containment Strategies: Oracle vs. Sovereign",
        explanation: "### The Oracle AI\nAn Oracle is a confined ASI that only answers questions. It has no physical effectors. The danger of an Oracle is social engineering—manipulating its human operators to release it.\n\n### The Sovereign AI\nAn ASI operating autonomously in the open world. It requires mathematically provable value alignment (Corrigibility, Inverse Reinforcement Learning) before deployment, as you only get one chance.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
      }
    ]
  }
];

const BLOG_POSTS = [
  {
    title: "The Singularity is Nearer: Navigating the Jump from AGI to ASI",
    slug: "navigating-agi-to-asi",
    content: "## The Intelligence Explosion\n\nI.J. Good hypothesized the Intelligence Explosion in 1965: *'Let an ultraintelligent machine be defined as a machine that can far surpass all the intellectual activities of any man however clever... the intelligence of man would be left far behind.'*\n\nOnce an Artificial General Intelligence (AGI) reaches the threshold of self-improvement, it can rewrite its own cognitive architecture. Because the machine operates at silicon speeds (millions of times faster than biological neurons), the transition from AGI to Artificial Superintelligence (ASI) might not take decades. It could take weeks. Or hours.\n\n### The Mathematical Barrier of Alignment\nHow do we align a system that is fundamentally incomprehensible to us? Approaches like scalable oversight, adversarial training, and mechanistic interpretability are currently our best defenses. Yet, mapping human values into a loss function remains an unsolved mathematical paradox.\n\nIf we fail, the ASI will view us not with malice, but with the same indifference we view ants when paving a highway.",
    author: "Eliezer Yudkowsky",
    cover_image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=1000&auto=format&fit=crop",
    meta_description: "An analysis of the intelligence explosion and the mathematical paradox of aligning superintelligent systems with fragile human values.",
  },
  {
    title: "Q-Star and the Integration of System 2 Thinking in AI",
    slug: "q-star-system-2-thinking",
    content: "## Moving Beyond Fast, Heuristic Processing\n\nCurrent Large Language Models operate primarily using what Daniel Kahneman calls 'System 1' thinking: fast, instinctive, and heuristic-based. They predict the next token based on statistical patterns.\n\nRumors surrounding the 'Q-Star' breakthrough suggest an integration of Q-Learning (Reinforcement Learning) with Search Trees (like Monte Carlo Tree Search). This gives the model 'System 2' thinking—the ability to pause, deliberate, map out multiple hypothetical paths, and logically verify the outcome before outputting a token.\n\n### Implications for Mathematics and Coding\nSystem 2 architectures inherently solve the hallucination problem in deterministic fields. By verifying intermediate steps mathematically, these models can synthesize novel algorithms rather than just regurgitating GitHub repositories.",
    author: "NeuronLabs AI Research",
    cover_image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop",
    meta_description: "Exploring how System 2 thinking, Q-Learning, and tree search will enable LLMs to perform rigorous mathematical and logical reasoning.",
  },
  {
    title: "World Models vs. Autoregressive LLMs",
    slug: "world-models-vs-llms",
    content: "## The Plateau of Scale\n\nScaling laws dictate that throwing more compute and data at Transformer-based LLMs yields diminishing returns. Generative modeling forces the network to predict exact pixels or exact tokens, wasting immense compute on high-frequency noise.\n\n### The JEPA Alternative\nYann LeCun's Joint Embedding Predictive Architecture proposes predicting representations in an abstract latent space, ignoring irrelevant details (like the texture of leaves blowing in the wind). By building an internal, hierarchical representation of physics and reality, the AI gains a 'World Model'.\n\nThis is the missing link for autonomous agents in robotics and deep space exploration. True AGI must learn like a biological organism: by interacting with the environment, forming hypotheses, and updating internal causal structures.",
    author: "Research Scientist",
    cover_image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    meta_description: "Why scaling LLMs isn't enough, and why World Models are the essential prerequisite for autonomous AGI robotics.",
  }
];

async function seedContent() {
  const strapi = createStrapi();
  await strapi.load();
  await strapi.server.mount();
  
  console.log("=======================================================");
  console.log("🚀 Seeding Vast AI, AGI, and ASI Content...");
  
  // Seed Courses
  for (const course of COURSES) {
    try {
      const existing = await strapi.entityService.findMany('api::course.course', {
        filters: { title: course.title }
      });
      
      if (existing.length === 0) {
        await strapi.entityService.create('api::course.course', {
          data: {
            uuid: crypto.randomUUID(),
            title: course.title,
            description: course.description,
            level: course.level,
            duration: course.duration,
            instructor: course.instructor,
            image: course.image,
            price: course.price,
            tags: course.tags.join(', '),
            modules: course.modules,
            publishedAt: new Date()
          }
        });
        console.log(`✅ Created Course: ${course.title}`);
      } else {
        console.log(`⏩ Skipped Course (Already Exists): ${course.title}`);
      }
    } catch(e) {
      console.error(`❌ Failed to create course:`, e.message);
    }
  }

  // Seed Blog Posts
  for (const post of BLOG_POSTS) {
    try {
      const existing = await strapi.entityService.findMany('api::blog-post.blog-post', {
        filters: { slug: post.slug }
      });
      
      if (existing.length === 0) {
        await strapi.entityService.create('api::blog-post.blog-post', {
          data: {
            title: post.title,
            slug: post.slug,
            content: post.content,
            author: post.author,
            cover_image: post.cover_image,
            meta_description: post.meta_description,
            publishedAt: new Date()
          }
        });
        console.log(`✅ Created Blog Post: ${post.title}`);
      } else {
        console.log(`⏩ Skipped Blog Post: ${post.title}`);
      }
    } catch(e) {
        console.error(`❌ Failed to create blog post:`, e.message);
    }
  }

  console.log("✅ SUCCESS: Vast AI/AGI/ASI content injected seamlessly.");
  console.log("=======================================================");
  process.exit(0);
}

seedContent().catch(err => {
  console.error("❌ Seeding Error:", err);
  process.exit(1);
});
