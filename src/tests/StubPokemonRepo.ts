import {PokemonRepo} from '../App'
import Pokemon from '../pokemonVendingMachine/models/Pokemon'

export default class StubPokemonRepo implements PokemonRepo {
    getMyPokemon_returnValue: Pokemon[] = []
    getMyPokemon(): Pokemon[] {
        return this.getMyPokemon_returnValue
    }
}