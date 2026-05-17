import { Cache } from './pokecache.js';
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache = new Cache(10000);
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            if (!pageURL) {
                pageURL = `${PokeAPI.baseURL}/location-area/`;
            }
            const cacheCheck = this.cache.get(pageURL);
            if (cacheCheck) {
                return cacheCheck;
            }
            else {
                const response = await fetch(pageURL);
                const preCache = await response.json();
                this.cache.add(pageURL, preCache);
                return preCache;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Response status: ${error.message}`);
            }
            else {
                throw new Error(`Unknown error occurred.`);
            }
        }
    }
    async fetchLocation(locationName) {
        const pageURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
        try {
            const cacheCheck = this.cache.get(pageURL);
            if (cacheCheck) {
                return cacheCheck;
            }
            else {
                const response = await fetch(pageURL);
                if (!response.ok) {
                    throw new Error("Unable to fetch page URL. Please try again...");
                }
                const preCache = await response.json();
                this.cache.add(pageURL, preCache);
                return preCache;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Response status: ${error.message}`);
            }
            else {
                throw new Error(`Unknown error occurred.`);
            }
        }
    }
    async fetchPokemon(pokemon) {
        const url = `${PokeAPI.baseURL}/pokemon/${pokemon}`;
        try {
            const cacheCheck = this.cache.get(url);
            if (cacheCheck) {
                return cacheCheck;
            }
            else {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error when fetching Pokemon data. Please try again...");
                }
                const preCache = await response.json();
                const cacheFormat = preCache;
                this.cache.add(pokemon, cacheFormat);
                return cacheFormat;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw new Error(`Response status: ${error.message}`);
            }
            else {
                throw new Error(`Unknown error occurred.`);
            }
        }
        ;
    }
}
