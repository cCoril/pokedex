import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        help: {
            name: "help",
            description: "Displays a help message",
            callback: commandHelp,
        },
        exit: {
            name: "exit",
            description: "Exit the pokedex",
            callback: commandExit,
        },
        map: {
            name: "map",
            description: "Displays location areas",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "returns to the previous map",
            callback: commandMapb,
        },
        explore: {
            name: "explore <location>",
            description: "displays the pokemon within the area",
            callback: commandExplore,
        },
        catch: {
            name: "catch <pokemon>",
            description: "attempts to catch the pokemon",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect <pokemon>",
            description: "allows you to inspect pokemon you have caught",
            callback: commandInspect,
        },
        pokedex: {
            name: "pokedex",
            description: "displays caught pokemon",
            callback: commandPokedex,
        }
    };
}
