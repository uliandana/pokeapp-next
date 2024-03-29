import { Pokemon } from '../Model/Pokemon';

export interface PokemonRepository {
  getPokemon(offset: number): Promise<Pokemon[]>,
  getPokemonByName(name: string, statOnly?: Boolean): Promise<Pokemon>,
  getAllPokemon(): Promise<Pokemon[]>,
}
