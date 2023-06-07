import {PokemonRepo} from '../../App'
import Pokemon from '../models/Pokemon'

export default class NetworkPokemonRepo implements PokemonRepo {
    myPokemon: Pokemon[] = []

    saveMyPokemon(pokemons: Pokemon[]): void {

    }

    getMyPokemon(): Pokemon[] {
        return []
    }
}