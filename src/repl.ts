import { createInterface } from "node:readline";
import { getCommands } from "./command_registry.js";

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

export function startREPL() {
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Pokedex > "
});
rl.prompt();
rl.on("line", (callback) => {
   const response = cleanInput(callback);
   if (response.length < 1) {
    rl.prompt();
   } else {
    const commandInput = response[0]
    const commandList = getCommands();
    try {
        if (commandList[commandInput]) {
            // This is where I am having trouble
            const runFunction = commandList[commandInput]["callback"];
            runFunction(commandList);
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