const OpenAI = require("openai");

const createThread = async (client, message) => {
    const thread = await client.beta.threads.create();

    if (message) {
        await client.beta.threads.messages.create(thread.id, {
            role: "user",
            content: message,
        });
    }

    return thread;
};

module.exports = { createThread };
