const OpenAI = require("openai");
const { tools } = require("../tools/allTools.js");
const { assistantPrompt } = require("../const/prompt.js");

const createAssistant = async (client) => {
    return await client.beta.assistants.create({
        model: "gpt-4o-mini",
        name: "Alt",
        instructions: assistantPrompt,
        tools: Object.values(tools).map((tool) => tool.definition),
    });
};

module.exports = { createAssistant };
