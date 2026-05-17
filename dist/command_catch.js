export async function commandCatch(state, pokemon) {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    try {
        const pokeData = await state["pokeAPI"].fetchPokemon(pokemon);
        const baseXP = pokeData.base_experience;
        const chance = Math.random() - (baseXP * 0.0025);
        if (chance > 0) {
            const target = state["caughtPokemon"];
            target[pokemon] = pokeData;
            console.log(`${pokemon} was caught!`);
            console.log(`Current Pokemon:`);
            for (const [key, value] of Object.entries(target)) {
                console.log(value.name);
            }
            console.log("You may now inspect it with the inspect command.");
        }
        else {
            console.log(`${pokemon} escaped!`);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Response status: ${error.message}`);
        }
        else {
            throw new Error(`Unknown error occurred...`);
        }
    }
}
;
