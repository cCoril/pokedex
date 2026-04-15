import { getCommands } from "./command_registry.js"

export function commandHelp(): void {
    const commandList = ["help", "exit"]
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");

    const commandReg = getCommands();
    for (const command of commandList) {
        console.log(`${commandReg[command]["name"]}: ${commandReg[command]["description"]}`);
    }
}