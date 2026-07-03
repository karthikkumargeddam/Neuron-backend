const { createStrapi } = require('@strapi/strapi');

async function seedBlog() {
  const strapi = createStrapi();
  await strapi.load();

  console.log("Seeding SEO Blog Posts...");

  const posts = [
    {
      title: "How to Learn PyTorch in 2026: The Ultimate Guide",
      slug: "how-to-learn-pytorch-in-2026",
      meta_description: "A comprehensive guide to mastering PyTorch for deep learning. We cover tensors, neural networks, autograd, and GPU acceleration.",
      content: `## Why PyTorch is Still King

PyTorch remains the dominant framework for AI research and production in 2026. Its intuitive imperative programming model and deep integration with Python make it the go-to tool.

In this guide, we will break down the exact path you need to follow to master PyTorch, from basic tensors to distributed training on large clusters.

### Step 1: Mastering Tensors
Tensors are the fundamental data structure in deep learning. Understanding how to manipulate them is critical.

### Step 2: The Autograd Engine
Automatic differentiation is the magic that powers backpropagation. We'll show you how PyTorch computes gradients dynamically.

### Step 3: Building Neural Networks
We'll build a custom CNN to classify images using the \`torch.nn\` module.

*Ready to start? Join the NeuronLabs Advanced Deep Learning lab today!*`,
      author: "NeuronLabs Staff",
      cover_image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Understanding Transformers: From Attention to LLMs",
      slug: "understanding-transformers-attention-to-llms",
      meta_description: "Learn the core mechanics of the Transformer architecture, including self-attention, positional encoding, and decoder blocks.",
      content: `## The Architecture that Changed Everything

The Transformer model, introduced in "Attention is All You Need", completely revolutionized natural language processing.

### The Self-Attention Mechanism
At the core of the Transformer is the self-attention mechanism, which allows the model to weigh the importance of different words in a sequence.

### Positional Encoding
Because Transformers process data in parallel, they need a way to understand the order of the sequence.

### Scaling Up to LLMs
Modern Large Language Models like GPT-5 are essentially massive, scaled-up versions of the original Transformer decoder architecture.

*Dive deeper into LLM architecture with our Generative AI Sandbox.*`,
      author: "Karthik Geddam",
      cover_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  for (const post of posts) {
    try {
      const existing = await strapi.db.query('api::blog-post.blog-post').findOne({
        where: { slug: post.slug }
      });

      if (!existing) {
        await strapi.entityService.create('api::blog-post.blog-post', {
          data: {
            ...post,
            publishedAt: new Date(),
          }
        });
        console.log(`Created: ${post.title}`);
      } else {
        console.log(`Already exists: ${post.title}`);
      }
    } catch (e) {
      console.error(`Failed to create ${post.title}:`, e.message);
    }
  }

  // Set permissions for public access
  try {
    const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
    if (publicRole) {
      await strapi.db.query('plugin::users-permissions.permission').createMany({
        data: [
          { action: 'api::blog-post.blog-post.find', role: publicRole.id },
          { action: 'api::blog-post.blog-post.findOne', role: publicRole.id }
        ]
      });
      console.log('Set public permissions for blog posts.');
    }
  } catch (e) {
    console.error("Failed to set permissions:", e.message);
  }

  console.log("Done.");
  process.exit(0);
}

seedBlog();
