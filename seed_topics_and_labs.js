const { createStrapi } = require('@strapi/strapi');

async function seedData() {
  const app = createStrapi();
  await app.load();
  await app.server.mount();

  console.log("Seeding Articles...");

  const articles = [
    {
      title: "The Evolution of AI: From Narrow to General",
      slug: "ai",
      author: "Dr. Elena Rostova",
      cover_image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
      content: `
Artificial Intelligence has journeyed from rule-based symbolic systems to highly advanced deep learning architectures. 
Currently, we exist in the era of Artificial Narrow Intelligence (ANI) — systems trained for specific tasks like image recognition, natural language processing, and medical diagnosis.

But the real frontier is moving from these narrow domains to generalized intelligence.
      `
    },
    {
      title: "Understanding AGI: The Next Frontier",
      slug: "agi",
      author: "Dr. Wei Chen",
      cover_image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      content: `
Artificial General Intelligence (AGI) refers to a machine that can understand, learn, and apply knowledge across a wide range of tasks, at a level equal to or surpassing human capabilities.

Unlike current models, an AGI would not need to be retrained for every specific task. It would reason, plan, and adapt dynamically.
      `
    },
    {
      title: "Beyond AGI: What is Artificial Superintelligence (ASI)?",
      slug: "asi",
      author: "NeuronLabs AI",
      cover_image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
      content: `
Artificial Superintelligence (ASI) is a hypothetical AI that doesn't just mimic human intelligence, but vastly exceeds it in every conceivable dimension—including scientific creativity, general wisdom, and social skills.

If AGI is the equivalent of the smartest human, ASI is a mind so vast and rapid that human comprehension cannot grasp its internal logic.
      `
    }
  ];

  for (const articleData of articles) {
    const existing = await app.db.query('api::article.article').findOne({
      where: { slug: articleData.slug }
    });

    if (!existing) {
      await app.db.query('api::article.article').create({
        data: {
          ...articleData,
          publishedAt: new Date()
        }
      });
      console.log(`Created Article: ${articleData.title}`);
    } else {
      await app.db.query('api::article.article').update({
        where: { id: existing.id },
        data: {
          ...articleData,
          publishedAt: new Date()
        }
      });
      console.log(`Updated Article: ${articleData.title}`);
    }
  }

  console.log("Seeding realistic Labs code snippets...");

  const labs = await app.db.query('api::lab.lab').findMany();

  for (const lab of labs) {
    let codeSnippet = "";
    let terminalOutput = "";

    if (lab.title.toLowerCase().includes("neural")) {
      codeSnippet = `import torch
import torch.nn as nn

# Define a basic Neural Network
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.layer1 = nn.Linear(10, 5)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(5, 1)

    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)
        return x

model = SimpleNN()
print("Model initialized!")
print(model)`;
      terminalOutput = `Model initialized!
SimpleNN(
  (layer1): Linear(in_features=10, out_features=5, bias=True)
  (relu): ReLU()
  (layer2): Linear(in_features=5, out_features=1, bias=True)
)
Ready.`;
    } else if (lab.title.toLowerCase().includes("attention") || lab.title.toLowerCase().includes("transformer")) {
      codeSnippet = `import torch
import torch.nn.functional as F
import math

def scaled_dot_product_attention(query, key, value):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / math.sqrt(d_k)
    p_attn = F.softmax(scores, dim=-1)
    return torch.matmul(p_attn, value), p_attn

# Dummy inputs
q = torch.rand(1, 4, 8)
k = torch.rand(1, 4, 8)
v = torch.rand(1, 4, 8)

output, attn = scaled_dot_product_attention(q, k, v)
print("Attention output shape:", output.shape)`;
      terminalOutput = `Attention output shape: torch.Size([1, 4, 8])
Ready.`;
    } else if (lab.title.toLowerCase().includes("generative")) {
      codeSnippet = `import torch
import torch.nn as nn

class Generator(nn.Module):
    def __init__(self):
        super(Generator, self).__init__()
        self.main = nn.Sequential(
            nn.Linear(100, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 512),
            nn.LeakyReLU(0.2),
            nn.Linear(512, 1024),
            nn.Tanh()
        )

    def forward(self, x):
        return self.main(x)

netG = Generator()
noise = torch.randn(1, 100)
fake_data = netG(noise)
print(f"Generated data tensor size: {fake_data.size()}")`;
      terminalOutput = `Generated data tensor size: torch.Size([1, 1024])
Ready.`;
    } else if (lab.title.toLowerCase().includes("reinforcement")) {
      codeSnippet = `import numpy as np

# Q-Learning basics
num_states = 5
num_actions = 2
q_table = np.zeros((num_states, num_actions))

# Simulate an update
state = 0
action = 1
reward = 10
next_state = 1

alpha = 0.1 # Learning rate
gamma = 0.9 # Discount factor

best_next_action = np.argmax(q_table[next_state])
q_table[state, action] = q_table[state, action] + alpha * (reward + gamma * q_table[next_state, best_next_action] - q_table[state, action])

print("Updated Q-Table:")
print(q_table)`;
      terminalOutput = `Updated Q-Table:
[[ 0.  1.]
 [ 0.  0.]
 [ 0.  0.]
 [ 0.  0.]
 [ 0.  0.]]
Ready.`;
    }

    if (codeSnippet) {
      await app.db.query('api::lab.lab').update({
        where: { id: lab.id },
        data: {
          codeSnippet: codeSnippet,
          terminalOutput: terminalOutput
        }
      });
      console.log(`Updated lab: ${lab.title}`);
    }
  }

  console.log("Seeding complete!");
  process.exit(0);
}

seedData().catch(console.error);
