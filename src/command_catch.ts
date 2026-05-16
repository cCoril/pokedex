import { Pokemon } from 'pokenode-ts';
import { State } from './state.js';


export async function commandCatch(state: State, pokemon: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    try {
        const pokeData = await state["pokeAPI"].fetchPokemon(pokemon);
        const baseXP = pokeData.base_experience;
        const chance = Math.random() - (baseXP * 0.0025);
        if (chance > 0) {
            const target = state["caughtPokemon"];
            const source = {pokemon: pokeData};
            Object.assign(target, source);
            console.log(`${pokemon} was caught!`);
            console.log("You may now inspect it with the inspect command.")
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