import { State } from "./state.js";
import { Pokemon } from 'pokenode-ts';



export async function commandInspect(state: State, pokemon: string): Promise<void> {
    const test = state["caughtPokemon"][pokemon];
    const pokeData = <Pokemon>test;
    if (!pokeData) {
        throw new Error("you have not caught that pokemon");
    }
    console.log(`Name: ${pokeData.name}`);
    console.log(`Height: ${pokeData.height}`);
    console.log(`Weight: ${pokeData.weight}`);
    console.log("Stats:");
    for (const stat of pokeData.stats) {
        console.log(`   -${stat.stat.name}: ${stat.base_stat}`);
    };
    console.log("Types:")
    for (const type of pokeData.types) {
        console.log(` -${type.type.name}`);
    };

}