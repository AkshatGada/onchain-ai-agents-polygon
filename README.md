# onchain-ai-agents-polygon

## What Are AI Agents?

AI agents are intelligent systems designed to perform tasks autonomously by processing real-time data and interacting with their environment. Unlike traditional Large Language Models (LLMs), which are trained on vast datasets but lack real-time interactivity, AI agents can:

- Make decisions.
- Solve complex problems.
- Interact with external systems.
- Execute actions autonomously.

This versatility allows AI agents to transcend natural language processing, offering advanced capabilities in various domains, including blockchain-based applications.

---

# Building an AI Assistant with OpenAI's Assistants API in JavaScript

This guide provides step-by-step instructions to create an AI Assistant using OpenAI's Assistants API with JavaScript.

---

## Prerequisites

1. **OpenAI API Key**: Obtain from your [OpenAI account](https://platform.openai.com/account/api-keys).
2. **Node.js**: Ensure Node.js (v14+) is installed on your system.
3. **OpenAI Node.js Library**: Install via npm:
   ```bash
   npm install openai

   

 const { Configuration, OpenAIApi } = require("openai");
   

const configuration = new Configuration({
  apiKey: "your-api-key",
});

const openai = new OpenAIApi(configuration);

