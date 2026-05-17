export async function commandInspect(state, pokemon) {
    console.log("attempting to catch", pokemon);
    const pokeData = state["caughtPokemon"].pokemon;
    if (!pokeData) {
        console.log(`pokeData: ${pokeData}`);
        throw new Error("you have not caught that pokemon");
    }
    console.log(`Name: ${pokeData.name}`);
    console.log(`Height: ${pokeData.height}`);
    console.log(`Weight: ${pokeData.weight}`);
    console.log("Stats:");
    for (const stat of pokeData.stats) {
        console.log(`   -${stat.stat.name}: ${stat.base_stat}`);
    }
    ;
    console.log("Types:");
    for (const type of pokeData.types) {
        console.log(` -${type.type.name}`);
    }
    ;
}
