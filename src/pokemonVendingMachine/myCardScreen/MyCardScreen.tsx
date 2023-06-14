import styles from './MyCardScreen.module.scss'
import Contents from '../../Contents'
import {PokemonRepo} from '../../App'

export default function MyCardScreen(props: { pokemonRepo: PokemonRepo }) {
    const pokemons = props.pokemonRepo.getMyPokemon()

    return (
        <Contents>
            <h1 className={styles.myCardListTitle}>マイカードリスト</h1>
            <div>全{pokemons.length}枚</div>
            {pokemons.map(pokemon => (
                <div key={pokemon.id}>
                    <div>#{pokemon.id}</div>
                    <div>{pokemon.name}</div>
                    <div>{pokemon.types[0]?.type.name}</div>
                    <img src={pokemon.sprites.other.official_artwork.front_default} alt={`pokemonImage${pokemon.id}`}/>
                </div>
            ))}
        </Contents>
    )
}
