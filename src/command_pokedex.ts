import { State } from './state.js';

export async function commandPokedex(state: State): Promise<void> {
    const pokedex = state["caughtPokemon"];
    console.log("Your Pokedex:")
    for (let pokemon in pokedex) {
        console.log(`   - ${pokedex[pokemon].name}`);
    }
}