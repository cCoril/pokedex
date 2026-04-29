import { type State } from "./state.js"

export async function commandExit(state: State): Promise<void> {
    const rl = state["rl"];
    console.log("Closing the Pokedex... Goodbye!")
    rl.close();
    process.exit(0);
}