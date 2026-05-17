export async function commandExit(state) {
    const rl = state["rl"];
    console.log("Closing the Pokedex... Goodbye!");
    rl.close();
    process.exit(0);
}
