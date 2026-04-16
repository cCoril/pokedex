import type { State } from "./state.js"

export function commandHelp(state: State): void {
    const commandList = state["commands"]
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (let key in commandList) {
        console.log(`${commandList[key]["name"]}: ${commandList[key]["description"]}`);
    }
     
}   

