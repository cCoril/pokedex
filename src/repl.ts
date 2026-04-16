import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";
import { CLICommand, type State } from "./state.js"

export function cleanInput(input: string): string[] {
    
    let cleanText = input.trim().split(" ");

    for (let i = 0; i < cleanText.length; i++) { 
         if (cleanText[i] === "") {
            cleanText.splice(i, 1)
        } else {
            cleanText[i] = cleanText[i].toLowerCase();
        }  
    }
    return cleanText;
}

export function startREPL(state: State) {
    const rl = state["rl"]
    rl.prompt();

    rl.on("line", (callback) => {
   const response = cleanInput(callback);

   if (response.length < 1) {
    rl.prompt();
   } else {
    const commandInput = response[0]
    const commandList = state["commands"];
    try {
        if (commandList[commandInput]) {
            const runFunction = commandList[commandInput]["callback"];
            runFunction(state);
    }
        } catch (error) {
            if (error instanceof Error) {
            console.log(`${error.message}`);
            } else {
                throw new Error("Unknown command");
            }
        }

    rl.prompt();
   }
})
}