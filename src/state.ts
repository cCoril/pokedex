import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";
import { Pokemon } from 'pokenode-ts'


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
rl: Interface;
commands: Record<string, CLICommand>;
pokeAPI: PokeAPI;
nextLocationsURL: string;
prevLocationsURL: string;
caughtPokemon: Record<string, Pokemon>;
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
    const caughtPokemon = {} 

    return {
        rl,
        commands,
        pokeAPI,
        nextLocationsURL,
        prevLocationsURL,
        caughtPokemon,
  };
}