import { Pokemon } from 'pokenode-ts';
import { State } from './state.js';

export async function commandCatch(state: State, pokemon: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Unable to fetch Pokemon data. Please try again...");
        }

        // Gotta figure out how to resolve this bug
        const preFormat = await response.json();
        const pokeData = <Pokemon>preFormat;
        const baseXP = pokeData.base_experience;
        const chance = Math.random() - (baseXP * 0.0025);
        if (chance > 0) {
            const target = state["pokedex"];
            const source = {pokemon: pokeData};
            Object.assign(target, source);
            console.log(`${pokemon} was caught!`);
        } else {
            console.log(`${pokemon} escaped!`);
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Response status: ${error.message}`);
        } else {
            throw new Error(`Unknown error occurred...`);
        }
    }
};