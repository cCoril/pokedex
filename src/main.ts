import { initState } from "./state.js";
import { startREPL } from "./repl.js";


function main() {
  const init = initState();
  startREPL(init);
}

main();