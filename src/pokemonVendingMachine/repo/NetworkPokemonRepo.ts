import {PokemonRepo} from '../../App'
import Pokemon, {PokemonBuilder} from '../models/Pokemon'

export default class NetworkPokemonRepo implements PokemonRepo {
    myPokemon: Pokemon[] = []

    saveMyPokemon(pokemons: Pokemon[]): void {

    }

    getMyPokemon(): Pokemon[] {
        return [
            (new PokemonBuilder())
                .withId(1)
                .withName("bulbasaur")
                .withTypes([{type: {name: "grass"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")
                .build(),
        ]
    }
}