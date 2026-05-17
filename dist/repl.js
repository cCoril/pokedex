export function cleanInput(input) {
    let cleanText = input.toLowerCase().trim().split(" ").filter((word) => word !== "");
    return cleanText;
}
export async function startREPL(state) {
    const rl = state["rl"];
    rl.prompt();
    rl.on("line", async (callback) => {
        const response = cleanInput(callback);
        if (response.length < 1) {
            rl.prompt();
        }
        else {
            const commandInput = response[0];
            const args = response.slice(1);
            const commandList = state["commands"];
            try {
                if (commandList[commandInput]) {
                    const runFunction = commandList[commandInput]["callback"];
                    if (args.length > 1) {
                        await runFunction(state, ...args);
                        rl.prompt();
                    }
                    else {
                        await runFunction(state, args[0]);
                        if (commandInput != "exit") {
                            rl.prompt();
                        }
                    }
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(`${error.message}`);
                }
                else {
                    throw new Error("Unknown command");
                }
                rl.prompt();
            }
        }
    });
}
