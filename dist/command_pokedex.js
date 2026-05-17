export async function commandPokedex(state) {
    const pokedex = state["caughtPokemon"];
    console.log("Your Pokedex:");
    for (let pokemon in pokedex) {
        console.log(`   - ${pokedex[pokemon].name}`);
        console.log("testing...there should be more than one");
    }
}
