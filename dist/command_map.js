export async function commandMap(state) {
    try {
        const response = await state["pokeAPI"].fetchLocations(state.nextLocationsURL);
        if (response.next) {
            state.nextLocationsURL = response.next;
        }
        for (let i = 0; i < response.results.length; i++) {
            console.log(response.results[i].name);
        }
    }
    catch {
        throw new Error(`Response Error: ${Response.error}`);
    }
}
