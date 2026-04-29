import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";
import { CLICommand, type State } from "./state.js"

export function cleanInput(input: string): string[] {
    
    let cleanText = input.toLowerCase().trim().split(" ").filter((word) => word !== "");
    return cleanText;
}

export async function startREPL(state: State): Promise<void> {
    const rl = state["rl"]
    rl.prompt();

    rl.on("line", async (callback) => {
   const response = cleanInput(callback);

   if (response.length < 1) {
    rl.prompt();
   } else {
    const commandInput = response[0]
    const commandList = state["commands"];
    try {
        if (commandList[commandInput]) {
            const runFunction = commandList[commandInput]["callback"];
            await runFunction(state);
            rl.prompt()
    }
        } catch (error) {
            if (error instanceof Error) {
            console.log(`${error.message}`);
            } else {
                throw new Error("Unknown command");
            }
        }
   }
})
}