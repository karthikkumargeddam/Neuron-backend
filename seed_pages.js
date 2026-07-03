const { createStrapi } = require('@strapi/strapi');
require('dotenv').config();

async function seedPages() {
  const app = await createStrapi().load();

  const pages = [
    {
      title: 'Artificial Intelligence (AI): A Complete End-to-End Guide',
      slug: 'ai',
      content: `
If you're asking about the complete progression of AI from simple systems to superintelligence, it is often described like this:

\`\`\`mermaid
graph TD
    Rule[Rule-Based Systems] --> ML[Machine Learning]
    ML --> DL[Deep Learning]
    DL --> GenAI[Generative AI]
    GenAI --> ANI[ANI: Artificial Narrow Intelligence]
    ANI --> AGI[AGI: Artificial General Intelligence]
    AGI --> ASI[ASI: Artificial Superintelligence]
\`\`\`

### The 7 Stages of AI Evolution

1. **Rule-Based AI (1950s–1990s)**
   - Follows predefined rules.
   - No learning capability.
   - *Example:* Simple expert systems.
2. **Machine Learning**
   - Learns patterns from data.
   - *Use Cases:* Spam detection, recommendations, fraud detection.
3. **Deep Learning**
   - Uses neural networks with many layers.
   - *Use Cases:* Speech recognition, image recognition, translation.
4. **Generative AI**
   - Creates text, images, video, code, and audio.
   - *Examples:* ChatGPT, image generators, coding assistants.
5. **ANI (Artificial Narrow Intelligence)**
   - Specialized intelligence.
   - Better than humans at specific tasks but cannot generalize broadly.
   - *Current Status:* All current AI systems are ANI.
6. **AGI (Artificial General Intelligence) — *Not Yet Achieved***
   - Human-level intelligence across many domains.
   - Can learn and adapt to new tasks like a person.
7. **ASI (Artificial Superintelligence) — *Hypothetical***
   - Surpasses human intelligence in nearly all areas.
   - Could potentially make scientific discoveries and solve complex problems much faster than humans.

---

### Timeline (Highly Uncertain)
- **ANI:** Exists today ✅
- **AGI:** Some researchers predict within years; others think decades away ❓
- **ASI:** Could follow AGI, but nobody knows if or when it will happen ❓

### What is Needed to Achieve AGI?
- Advanced reasoning
- Long-term memory
- Learning from experience
- Planning and decision-making
- Understanding the physical and social world
- Ability to transfer knowledge across domains

*Today, the most advanced AI systems are still considered forms of ANI, although they are becoming increasingly capable and general-purpose.*

---

# Artificial Intelligence (AI): A Complete End-to-End Guide

## What is Artificial Intelligence?

Artificial Intelligence (AI) is a branch of computer science focused on creating machines and software that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, recognizing images, making decisions, and adapting to new situations.

The goal of AI is not simply to automate repetitive work but to build systems that can analyze information, learn from experience, and improve their performance over time.

---

## History of Artificial Intelligence

### 1950s: Birth of AI
The foundations of AI were laid by Alan Turing, who proposed the idea that machines could think. In 1956, the term "Artificial Intelligence" was coined by John McCarthy at the Dartmouth Workshop.

**Key Developments:**
- Turing Test introduced
- Early symbolic reasoning systems
- Rule-based problem solving

### 1960s–1980s: Expert Systems
Researchers developed expert systems that used predefined rules to solve problems.

**Examples:**
- Medical diagnosis systems
- Industrial troubleshooting systems
- Financial advisory systems

*Limitation:* These systems could not learn independently and required human experts to manually update rules.

### 1990s–2010s: Machine Learning Revolution
Instead of programming every rule, scientists began training computers using data.

**Major Breakthroughs:**
- Statistical learning
- Decision trees
- Support Vector Machines
- Neural Networks

AI started outperforming humans in specific tasks such as:
- Chess
- Speech recognition
- Image classification

### 2012–Present: Deep Learning Era
Deep learning transformed AI by enabling neural networks with many layers.

**Achievements:**
- Image recognition
- Natural language processing
- Autonomous driving
- Medical imaging
- AI assistants (OpenAI models, Google DeepMind systems, Large language models)

---

## How AI Works

### Step 1: Data Collection
AI systems require large amounts of data.
*Examples:* Text documents, Images, Audio recordings, Videos, Sensor data.

### Step 2: Data Processing
Raw data is cleaned and organized.
*Tasks:* Removing duplicates, Correcting errors, Formatting information.

### Step 3: Model Training
Algorithms learn patterns from data.
*Example:* If an AI sees millions of cat images, it learns characteristics associated with cats.

### Step 4: Testing
The model is tested on unseen data to measure accuracy.
*Metrics:* Accuracy, Precision, Recall, F1 Score.

### Step 5: Deployment
The trained AI model is integrated into applications and services.
*Examples:* Chatbots, Recommendation engines, Fraud detection systems.

---

## Types of Artificial Intelligence

### 1. Artificial Narrow Intelligence (ANI)
ANI specializes in specific tasks.
*Examples:* Voice assistants, Recommendation systems, Language models, Navigation software.
*Characteristics:* Task-specific, Highly efficient, No true understanding.
*Current AI belongs to this category.*

### 2. Artificial General Intelligence (AGI)
AGI would possess human-level intelligence across a wide range of tasks.
*Capabilities:* Learn any subject, Transfer knowledge between domains, Adapt to unfamiliar situations, Perform reasoning similar to humans.
*Example Scenario:* An AGI could write software, diagnose diseases, conduct research, manage businesses, and learn new professions.
*No confirmed AGI currently exists.*

### 3. Artificial Superintelligence (ASI)
ASI refers to intelligence that exceeds human capabilities in virtually every field.
*Potential Abilities:* Solve scientific mysteries, Design advanced technologies, Create new mathematical theories, Optimize global systems.
*Characteristics:* Superior reasoning, Superior memory, Superior creativity, Superior learning speed.
*ASI remains theoretical.*

---

## AI Technologies

### Machine Learning
Machine learning allows systems to learn from data without explicit programming.

#### Categories:
- **Supervised Learning:** Uses labeled data (e.g., Spam detection, Disease prediction)
- **Unsupervised Learning:** Finds hidden patterns (e.g., Customer segmentation, Anomaly detection)
- **Reinforcement Learning:** Learns through rewards and penalties (e.g., Robotics, Game-playing AI)

### Deep Learning
Deep learning uses artificial neural networks inspired by the human brain.
*Applications:* Computer vision, Speech recognition, Language translation, Generative AI.

### Natural Language Processing (NLP)
NLP enables machines to understand and generate human language.
*Applications:* Chatbots, Search engines, Translation systems, Virtual assistants.

### Computer Vision
Computer vision enables machines to interpret visual information.
*Applications:* Face recognition, Medical imaging, Self-driving cars, Security systems.

### Robotics and AI
Combining AI with robotics allows machines to interact with the physical world.
*Examples:* Manufacturing robots, Warehouse automation, Delivery robots, Surgical robots.

### Generative AI
Generative AI creates new content rather than simply analyzing data.
*Generates:* Text, Images, Audio, Video, Code.
*Examples:* AI writing assistants, AI image generators, AI coding assistants.

---

## Real-World Applications of AI
- **Healthcare:** Disease diagnosis, Drug discovery, Medical imaging analysis
- **Finance:** Fraud detection, Algorithmic trading, Risk assessment
- **Education:** Personalized learning, Automated grading, Virtual tutors
- **Agriculture:** Crop monitoring, Yield prediction, Pest detection
- **Transportation:** Route optimization, Autonomous vehicles, Traffic prediction
- **E-Commerce:** Product recommendations, Customer support, Inventory management

---

## Benefits of AI
- **Increased Productivity:** Automates repetitive tasks.
- **Better Decision-Making:** Analyzes massive datasets quickly.
- **Cost Reduction:** Reduces operational expenses.
- **24/7 Availability:** AI systems can operate continuously.
- **Enhanced Accuracy:** Reduces human errors in many domains.

---

## Challenges and Risks of AI
- **Bias:** AI can inherit biases present in training data.
- **Privacy Concerns:** Large datasets may contain sensitive information.
- **Job Displacement:** Some roles may become automated.
- **Security Risks:** AI systems can be misused for cyberattacks and misinformation.
- **Ethical Concerns:** Questions about fairness, accountability, and transparency.

---

## Future of AI
- **Near-Term (2026–2030):** More capable AI assistants, Better healthcare diagnostics, Increased workplace automation, More powerful multimodal AI.
- **Mid-Term (2030–2040):** Advanced autonomous systems, AI-driven scientific research, Potential progress toward AGI.
- **Long-Term:** Possible AGI, Possible ASI, Significant societal and economic transformation.

---

## Conclusion
Artificial Intelligence is one of the most transformative technologies in human history. From simple rule-based programs to advanced generative models, AI continues to evolve rapidly. Today, humanity operates in the era of Artificial Narrow Intelligence (ANI). Researchers are actively exploring the path toward Artificial General Intelligence (AGI), while Artificial Superintelligence (ASI) remains a theoretical concept.

As AI advances, balancing innovation, safety, ethics, and human benefit will be critical to ensuring that this technology improves lives and contributes positively to society.
      `
    },
    {
      title: 'Artificial General Intelligence (AGI) – Complete Overview',
      slug: 'agi',
      content: `
# Artificial General Intelligence (AGI) – Complete Overview

## What is AGI?

**Artificial General Intelligence (AGI)** is an AI system that can understand, learn, reason, and solve problems across many different domains at a level comparable to or beyond humans.

Today's AI systems (like chatbots, image generators, recommendation systems) are mostly **Narrow AI** because they are designed for specific tasks.

AGI would be able to:

- Learn new skills without retraining from scratch
- Understand context across different domains
- Reason and make decisions
- Transfer knowledge from one field to another
- Adapt to unfamiliar situations
- Continuously improve itself

---

## AI Evolution

\`\`\`mermaid
graph TD
    AI[Artificial Intelligence (AI)] --> ANI[Narrow AI (ANI)]
    ANI --> AGI[Artificial General Intelligence (AGI)]
    AGI --> ASI[Artificial Super Intelligence (ASI)]
\`\`\`

### 1. Narrow AI (ANI)

Examples:

* Chatbots
* Google Search
* Netflix Recommendations
* Face Recognition
* Self-driving car modules

Characteristics:

* Specialized
* Limited scope
* Cannot think beyond training

Example:

A chess AI can beat world champions but cannot drive a car.

---

### 2. Artificial General Intelligence (AGI)

Characteristics:

* Human-level intelligence
* General problem solving
* Common sense reasoning
* Self-learning
* Adaptability

Example:

An AGI could:

* Write software
* Diagnose diseases
* Teach mathematics
* Drive a vehicle
* Conduct scientific research

without needing separate specialized models.

---

### 3. Artificial Super Intelligence (ASI)

Characteristics:

* Smarter than all humans combined
* Creates new scientific theories
* Solves impossible problems
* Improves itself rapidly

Currently hypothetical.

---

# Key Components Required for AGI

## 1. Perception

Ability to understand the world through:

* Vision
* Speech
* Text
* Sensors

Example:

Recognizing a cat from an image and understanding its behavior.

---

## 2. Memory

Like human memory.

### Short-Term Memory

Current conversation.

### Long-Term Memory

Past experiences and learned knowledge.

AGI would need both.

---

## 3. Reasoning

Ability to:

* Analyze situations
* Draw conclusions
* Solve problems

Example:

If roads are flooded, choose an alternative route.

---

## 4. Learning

Humans learn from:

* Experience
* Observation
* Feedback

AGI should do the same.

---

## 5. Planning

Ability to:

* Set goals
* Create strategies
* Execute plans

Example:

Planning a mission to Mars.

---

## 6. Decision Making

Choosing the best action among alternatives.

Example:

Investment decisions, medical treatment selection.

---

## 7. Common Sense

One of the hardest challenges.

Humans know:

* Water is wet
* Fire is hot
* Glass breaks if dropped

Machines struggle with such implicit knowledge.

---

## AGI Architecture (Conceptual)

\`\`\`mermaid
graph TD
    Sensors[Sensors] --> Perception[Perception Layer]
    Perception --> KB[Knowledge Base]
    KB --> Memory[Memory System]
    Memory --> Reasoning[Reasoning Engine]
    Reasoning --> Planning[Planning Module]
    Planning --> Decision[Decision Module]
    Decision --> Actions[Actions]
\`\`\`

---

# Technologies Contributing to AGI

## Deep Learning

Neural networks that learn patterns.

Examples:

* GPT models
* Vision models

---

## Reinforcement Learning

Learning through rewards and penalties.

Example:

Game-playing AI.

---

## Neural Networks

Inspired by biological brains.

Types:

* CNN
* RNN
* Transformers

---

## Knowledge Graphs

Store relationships between facts.

Example:

\`\`\`text
India → Capital → New Delhi
India → Neighbor → China
\`\`\`

---

## Cognitive Computing

Mimics human thought processes.

Includes:

* Memory
* Reasoning
* Learning

---

## Robotics

AGI may need physical interaction with the world.

Examples:

* Household robots
* Industrial robots

---

# AGI vs Human Intelligence

| Feature       | Human | AGI       |
| ------------- | ----- | --------- |
| Learning      | Yes   | Expected  |
| Creativity    | Yes   | Possible  |
| Emotions      | Yes   | Unknown   |
| Adaptability  | High  | Goal      |
| Common Sense  | High  | Difficult |
| Consciousness | Yes   | Unknown   |

---

# Challenges in Building AGI

## 1. Common Sense Reasoning

Machines lack everyday understanding.

---

## 2. Consciousness

We don't fully understand human consciousness.

---

## 3. Transfer Learning

Applying knowledge from one area to another.

Humans do this naturally.

---

## 4. Safety

An AGI might make harmful decisions if goals are poorly defined.

---

## 5. Alignment Problem

Ensuring AGI goals match human values.

One of the biggest research problems.

---

## 6. Computational Requirements

AGI may require enormous computing power and energy.

---

# Different Approaches to AGI

## Symbolic AI

Uses rules and logic.

\`\`\`text
IF fever AND cough
THEN possible flu
\`\`\`

Pros:

* Explainable

Cons:

* Difficult to scale

---

## Neural Approach

Uses deep learning.

Pros:

* Learns from data

Cons:

* Less explainable

---

## Hybrid Approach

Combines:

* Neural networks
* Symbolic reasoning

Many researchers believe this is the most promising path.

---

# Major Organizations Working Toward AGI

* [OpenAI](https://openai.com?utm_source=chatgpt.com)
* [Google DeepMind](https://deepmind.google?utm_source=chatgpt.com)
* [Anthropic](https://www.anthropic.com?utm_source=chatgpt.com)
* [Microsoft Research](https://www.microsoft.com/research/?utm_source=chatgpt.com)
* [Meta AI](https://ai.meta.com?utm_source=chatgpt.com)
* [NVIDIA Research](https://research.nvidia.com?utm_source=chatgpt.com)

---

# Potential Benefits of AGI

### Healthcare

* Disease diagnosis
* Drug discovery
* Personalized medicine

### Education

* Personal tutors
* Customized learning

### Science

* New discoveries
* Climate solutions

### Business

* Automation
* Decision support

### Space Exploration

* Autonomous research systems
* Interplanetary missions

---

# Potential Risks

### Job Displacement

Many knowledge-based jobs may be automated.

### Security Risks

Powerful AGI could be misused.

### Economic Concentration

AGI benefits may concentrate among a few organizations.

### Autonomous Weapons

Military misuse.

### Loss of Human Control

If systems become highly autonomous.

---

# Current Status (2026)

Most experts agree that we do **not yet have AGI**.

Current frontier models can:

* Write code
* Solve complex problems
* Analyze images
* Conduct research
* Use tools

But they still have limitations:

* Inconsistent reasoning
* Limited long-term planning
* Imperfect common sense
* Lack of true autonomy

---

# Possible Path Toward AGI

\`\`\`mermaid
graph TD
    ANI[ANI (Current AI)] --> Multimodal[Multimodal AI]
    Multimodal --> Agentic[Agentic AI]
    Agentic --> LTM[Long-Term Memory]
    LTM --> World[World Models]
    World --> Reasoning[Human-Level Reasoning]
    Reasoning --> AGI[AGI]
    AGI --> Self[Self-Improving AGI]
    Self --> ASI[ASI]
\`\`\`

## Simple Definition

**AGI is an AI that can learn, understand, reason, and perform almost any intellectual task that a human can do, without being restricted to a single domain.** It remains a major research goal and has not yet been achieved.
      `
    },
    {
      title: 'Documentation',
      slug: 'documentation',
      content: `
## Getting Started

Welcome to the NeuronLabs Documentation. Here you will find everything you need to know about setting up your sandbox environments, navigating the PhD-level curriculum, and utilizing distributed training clusters.

To begin, create an account using the Sign Up portal, and spin up your first Virtual Box instance from the "Sandboxes" tab.

## Virtual Boxes

Our Virtual Box environments are pre-configured Linux instances designed for high-performance computing. They come fully loaded with:
- CUDA 12.x Toolkit
- PyTorch & TensorFlow (GPU accelerated)
- Docker & Docker Compose
- Root access for complete environment control

## Course Progress

Your progression in the "Courses" tab is automatically tracked. Any code you write within the embedded browser IDE is saved to your account session. Ensure you are signed in before starting a module.
      `
    },
    {
      title: 'API Reference',
      slug: 'api-reference',
      content: `
Programmatically control your sandboxes, access course materials, and trigger remote training runs via the NeuronLabs REST API.

### \`GET /api/courses\`
Retrieves a paginated list of all available PhD-level courses and labs.
\`\`\`bash
curl -X GET "https://api.neuronlabs.edu/v1/courses" \\
  -H "Authorization: Bearer YOUR_API_TOKEN"
\`\`\`

### \`POST /api/sandboxes/provision\`
Provisions a new isolated Virtual Box cluster with the requested GPU configuration.
\`\`\`bash
curl -X POST "https://api.neuronlabs.edu/v1/sandboxes/provision" \\
  -H "Content-Type: application/json" \\
  -d '{"gpu_type": "A100", "count": 2, "image": "pytorch:latest"}'
\`\`\`
      `
    },
    {
      title: 'Support',
      slug: 'support',
      content: `
Whether you're dealing with a hanging training loop or a cluster provisioning error, our dedicated support team for PhD researchers is available 24/7.

### Technical Support
Issues with your Virtual Box, GPU allocation, or code execution environments.
**Email:** support@neuronlabs.edu

### Academic Advising
Questions regarding course curriculum, PhD research tracks, and module certifications.
**Email:** academic@neuronlabs.edu
      `
    },
    {
      title: 'Privacy Policy',
      slug: 'privacy',
      content: `
Last updated: June 2026

## 1. Data Collection
We collect information you provide directly to us, such as your username, email address, and institutional affiliation when you register for an account. We also automatically collect telemetry data from your sandbox environments, including hardware utilization metrics (GPU/CPU usage) to optimize cluster performance.

## 2. Code and Intellectual Property
Any code you write, execute, or store within the NeuronLabs Virtual Boxes remains your intellectual property. We do not use your proprietary research or training scripts to train our own base models. However, code executed within shared Sandboxes may be temporarily cached on our distributed nodes.

## 3. Data Security
We implement strict security measures to protect your data. All communication with our APIs is encrypted via TLS. Virtual Box environments are completely isolated via hardware-level virtualization, preventing cross-tenant data leakage.
      `
    },
    {
      title: 'Terms of Service',
      slug: 'terms',
      content: `
Last updated: June 2026

## 1. Acceptance of Terms
By accessing and using the NeuronLabs platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

## 2. Acceptable Use
You agree to use our Virtual Box environments solely for educational and research purposes. The following activities are strictly prohibited:
- Cryptocurrency mining
- Hosting malicious content or launching network attacks
- Bypassing resource quotas or virtualization boundaries
- Sharing account credentials with unauthorized users

## 3. Termination
We reserve the right to suspend or terminate your access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      `
    }
  ];

  try {
    for (const page of pages) {
      // Check if page already exists
      const existing = await app.db.query('api::page.page').findOne({
        where: { slug: page.slug }
      });

      if (!existing) {
        await app.db.query('api::page.page').create({
          data: page
        });
        console.log(`Created page: ${page.title}`);
      } else {
        await app.db.query('api::page.page').update({
          where: { id: existing.id },
          data: page
        });
        console.log(`Updated page: ${page.title}`);
      }
    }
    
    // Allow public access to pages
    const roleService = app.service('plugin::users-permissions.role');
    const publicRole = await app.db.query('plugin::users-permissions.role').findOne({ where: { type: 'public' } });
    
    if (publicRole) {
      await app.db.query('plugin::users-permissions.permission').createMany({
        data: [
          { action: 'api::page.page.find', role: publicRole.id },
          { action: 'api::page.page.findOne', role: publicRole.id }
        ]
      });
      console.log('Granted public permissions to Page API');
    }

    console.log('Finished seeding Pages.');
  } catch (error) {
    console.error('Error seeding pages:', error);
  }

  process.exit(0);
}

seedPages();
