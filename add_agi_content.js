const { createStrapi } = require('@strapi/strapi');

const AGI_CONTENT = `# Artificial General Intelligence (AGI) – Complete Overview

## What is AGI?

**Artificial General Intelligence (AGI)** is an AI system that can understand, learn, reason, and solve problems across many different domains at a level comparable to or beyond humans.

Today's AI systems (like chatbots, image generators, recommendation systems) are mostly **Narrow AI** because they are designed for specific tasks.

AGI would be able to:

✅ Learn new skills without retraining from scratch
✅ Understand context across different domains
✅ Reason and make decisions
✅ Transfer knowledge from one field to another
✅ Adapt to unfamiliar situations
✅ Continuously improve itself

---

## AI Evolution

\`\`\`text
Artificial Intelligence (AI)
         ↓
Narrow AI (ANI)
         ↓
Artificial General Intelligence (AGI)
         ↓
Artificial Super Intelligence (ASI)
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

\`\`\`text
          Sensors
             ↓
      Perception Layer
             ↓
       Knowledge Base
             ↓
      Memory System
             ↓
       Reasoning Engine
             ↓
       Planning Module
             ↓
      Decision Module
             ↓
          Actions
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

\`\`\`text
ANI (Current AI)
        ↓
Multimodal AI
        ↓
Agentic AI
        ↓
Long-Term Memory
        ↓
World Models
        ↓
Human-Level Reasoning
        ↓
AGI
        ↓
Self-Improving AGI
        ↓
ASI
\`\`\`

## Simple Definition

**AGI is an AI that can learn, understand, reason, and perform almost any intellectual task that a human can do, without being restricted to a single domain.** It remains a major research goal and has not yet been achieved.
`;

createStrapi().load().then(async (strapi) => {
  console.log("Strapi loaded successfully. Updating AGI page...");
  try {
    const existing = await strapi.entityService.findMany('api::page.page', {
      filters: { slug: 'agi' }
    });

    if (existing && existing.length > 0) {
      await strapi.entityService.update('api::page.page', existing[0].id, {
        data: {
          content: AGI_CONTENT
        }
      });
      console.log("✅ Updated AGI page content.");
    } else {
      await strapi.entityService.create('api::page.page', {
        data: {
          title: 'Artificial General Intelligence (AGI) – Complete Overview',
          slug: 'agi',
          content: AGI_CONTENT,
          publishedAt: new Date()
        }
      });
      console.log("✅ Created AGI page.");
    }
  } catch (err) {
    console.error("❌ Error updating AGI page:", err.message);
  }
  process.exit(0);
}).catch(err => {
  console.error("Failed to load strapi", err);
  process.exit(1);
});
