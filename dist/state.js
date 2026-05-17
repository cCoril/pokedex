import { createInterface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
    const nextLocationsURL = "https://pokeapi.co/api/v2/location-area/";
    const prevLocationsURL = "";
    const caughtPokemon = {};
    return {
        rl,
        commands,
        pokeAPI,
        nextLocationsURL,
        prevLocationsURL,
        caughtPokemon,
    };
}
