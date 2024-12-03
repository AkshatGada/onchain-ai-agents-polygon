const createRun = async (client, thread, assistantId) => {
    let run = await client.beta.threads.runs.create(thread.id, {
        assistant_id: assistantId,
    });

    // Wait for the run to complete and keep polling
    while (run.status === 'in_progress' || run.status === 'queued') {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
        run = await client.beta.threads.runs.retrieve(thread.id, run.id);
    }

    return run;
};

module.exports = { createRun };
