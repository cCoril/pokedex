import { CLICommand } from "./state.js"
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";


export function getCommands(): Record<string, CLICommand> {
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
            name: "explore",
            description: "displays the pokemon within the area",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "attempts to catch the pokemon",
            callback: commandCatch,
        }
    };
}