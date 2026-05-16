import { NamedAPIResource, EncounterMethodRate, PokemonEncounter, Pokemon } from 'pokenode-ts';
import { Cache } from './pokecache.js';


export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  cache = new Cache(10000);

  constructor() {}
  

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    
    try {
      if (!pageURL) {
        pageURL = `${PokeAPI.baseURL}/location-area/`;
      }
      const cacheCheck = this.cache.get<ShallowLocations>(pageURL)
      if (cacheCheck) {
        return cacheCheck;
      } else {
        const response = await fetch(pageURL)
        const preCache = await response.json()
        this.cache.add(pageURL, preCache)
        return preCache
      }
        
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Response status: ${error.message}`);
      } else { throw new Error(`Unknown error occurred.`)}
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const pageURL = `${PokeAPI.baseURL}/location-area/${locationName}`;
    try {
        const cacheCheck = this.cache.get<Location>(pageURL)
        if (cacheCheck) {
          return cacheCheck;
        } else {
          const response = await fetch(pageURL);
          if (!response.ok) {
            throw new Error("Unable to fetch page URL. Please try again...");
          }
          const preCache = await response.json()
            this.cache.add(pageURL, preCache)
            return preCache
        }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Response status: ${error.message}`);
      } else { throw new Error(`Unknown error occurred.`)}
    }
  }


  async fetchPokemon(pokemon: string): Promise<Pokemon> {
    const url = `${PokeAPI.baseURL}/pokemon/${pokemon}`;
    try {
      const cacheCheck = this.cache.get<Pokemon>(url);
      if (cacheCheck) {
        return cacheCheck;
      } else {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error when fetching Pokemon data. Please try again...");
        }
        const preCache = await response.json();
        const cacheFormat = <Pokemon>preCache;
          this.cache.add(pokemon, cacheFormat);
          return cacheFormat;
      } 
   } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Response status: ${error.message}`);
      } else { throw new Error(`Unknown error occurred.`)}
    };
  }
}




export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResource[];
};

export type Location = {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate[];
    location: NamedAPIResource;
    names: string[];
    pokemon_encounters: PokemonEncounter[];
  }


