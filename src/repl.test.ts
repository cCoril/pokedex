import { cleanInput } from "./repl.js";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world  ",
        expected: ["hello", "world"],
    },
    
    {
        input: "PIKACHU  cHariZard  SQUIRtLE    ",
        expected: ["pikachu", "charizard", "squirtle"],
    },
    {
        input: "Scooby-Doo and Shaggy",
        expected: ["scooby-doo", "and", "shaggy"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input)
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        };
    });
});