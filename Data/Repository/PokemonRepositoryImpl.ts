import { PokemonRepository } from '@/Domain/Repository/PokemonRepository';
import PokemonDataSource from '../DataSource/PokemonDataSource';

export class PokemonRepositoryImpl implements PokemonRepository {
  dataSource: PokemonDataSource;

  constructor(_dataSource: PokemonDataSource) {
    this.dataSource = _dataSource;
  }
  
  async getPokemon(offset: number) {
    return this.dataSource.getPokemon!(offset);
  }

  async getPokemonByName(name: string, statOnly?: Boolean) {
    return this.dataSource.getPokemonByName!(name, statOnly);
  }

  async getAllPokemon() {
    return this.dataSource.getAllPokemon!();
  }
}
