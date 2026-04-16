import { type State } from "./state.js"

export function commandExit(state: State) {
    const rl = state["rl"];
    console.log("Closing the Pokedex... Goodbye!")
    rl.close();
    process.exit(0);
}