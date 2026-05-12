import { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
// Having trouble with getting the response to work. May need to update repl.ts
// Need to try debugging using console.log to see root cause
    try {
       const location = await state["pokeAPI"].fetchLocation(locationName);
       for (const encounter of location.pokemon_encounters) {
        console.log(encounter.pokemon.name);
       }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Response status: ${error.message}`);
        } else {
            throw new Error("Unknown Error occurred")
        }
    }
}