import { State } from "./state.js";

export async function commandMapb(state: State): Promise<void> {
    try {
        if (state.prevLocationsURL === "") {
            const response = await state.pokeAPI.fetchLocations();
            for (let i = 0; i < response.results.length; i++) {
                console.log(response.results[i].name)
            }
        } else {
            const response = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
            for (let i = 0; i < response.results.length; i++) {
                console.log(response.results[i].name)
                }
        }
    } catch {
        throw new Error(`Response Error: ${Response.error}`);
    }
};