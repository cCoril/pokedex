import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
rl: Interface;
commands: Record<string, CLICommand>;
pokeAPI: PokeAPI;
nextLocationsURL: string;
prevLocationsURL: string;
};

export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
        });   
    const commands = getCommands();
    const pokeAPI = new PokeAPI();
    const nextLocationsURL = "https://pokeapi.co/api/v2/location-area/";
    const prevLocationsURL = "";

    return {
        rl,
        commands,
        pokeAPI,
        nextLocationsURL,
        prevLocationsURL,
  };
}