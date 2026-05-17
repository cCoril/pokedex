export async function commandExplore(state, locationName) {
    try {
        const location = await state["pokeAPI"].fetchLocation(locationName);
        for (const encounter of location.pokemon_encounters) {
            console.log(encounter.pokemon.name);
        }
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Response status: ${error.message}`);
        }
        else {
            throw new Error("Unknown Error occurred");
        }
    }
}
