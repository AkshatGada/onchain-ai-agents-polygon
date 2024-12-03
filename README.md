# onchain-ai-agents-polygon

## What Are AI Agents?
AI agents are like digital masterminds, built to tackle tasks on their own by analyzing live data and engaging with the world around them. Unlike old-school Large Language Models (LLMs) that sit on mountains of knowledge but can’t keep up with real-time action, AI agents are the go-getters—they think, adapt, and act in the moment! They - 

- Make decisions.
- Solve complex problems.
- Interact with external systems.
- Execute actions autonomously.

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

## Create an Assistant 

```bash
import OpenAI from "openai";
const openai = new OpenAI();

async function main() {
  const assistant = await openai.beta.assistants.create({
    name: "DeFi Assistant",
    instructions: "Y our role is to:
    - Analyze token prices and trends.
    - Recommend optimal yield farming strategies.
    - Identify arbitrage opportunities between decentralized exchanges.
    - Provide alerts for loan safety in lending protocols.
    - Suggest DeFi investment strategies based on user inputs.
    Answer concisely and clearly",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4o"
  });
}

main();

```
## Create an On-chain Defi assistant 

```bash
const assistant = await openai.createAssistant({
  name: "DeFi Assistant",
  instructions: `
    You are an on-chain DeFi assistant.
    Your role is to:
    - Analyze token prices and trends.
    - Recommend optimal yield farming strategies.
    - Identify arbitrage opportunities between decentralized exchanges.
    - Provide alerts for loan safety in lending protocols.
    - Suggest DeFi investment strategies based on user inputs.
    Answer concisely and clearly.`,
  model: "gpt-4-1106-preview",
});

console.log("DeFi Assistant Created:", assistant.data);

```
## Create a Thread 

```bash
const thread = await openai.beta.threads.create();
```

## Add a message to the thread 

```bash
const message = await openai.beta.threads.messages.create(
  thread.id,
  {
    role: "user",
    content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
  }
);
```

## Create a Run 

```bash

// We use the stream SDK helper to create a run with
// streaming. The SDK provides helpful event listeners to handle 
// the streamed response.
 
const run = openai.beta.threads.runs.stream(thread.id, {
    assistant_id: assistant.id
  })
    .on('textCreated', (text) => process.stdout.write('\nassistant > '))
    .on('textDelta', (textDelta, snapshot) => process.stdout.write(textDelta.value))
    .on('toolCallCreated', (toolCall) => process.stdout.write(`\nassistant > ${toolCall.type}\n\n`))
    .on('toolCallDelta', (toolCallDelta, snapshot) => {
      if (toolCallDelta.type === 'code_interpreter') {
        if (toolCallDelta.code_interpreter.input) {
          process.stdout.write(toolCallDelta.code_interpreter.input);
        }
        if (toolCallDelta.code_interpreter.outputs) {
          process.stdout.write("\noutput >\n");
          toolCallDelta.code_interpreter.outputs.forEach(output => {
            if (output.type === "logs") {
              process.stdout.write(`\n${output.logs}\n`);
            }
          });
        }
      }
    });


```




