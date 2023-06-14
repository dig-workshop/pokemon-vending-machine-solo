import styles from './MyCardScreen.module.scss'
import Contents from '../../Contents'
import {PokemonRepo} from '../../App'

export default function MyCardScreen(props: { pokemonRepo: PokemonRepo }) {
    const pokemons = props.pokemonRepo.getMyPokemon()

    return (
        <Contents>
            <h1 className={styles.myCardListTitle}>マイカードリスト</h1>
            <div className={styles.myTotalCard}>全{pokemons.length}枚</div>
            <div className={styles.cardContents}>
            {pokemons.map(pokemon => (
                <div key={pokemon.id} className={styles.pokemonItem}>
                    <div className={styles.id}>#{pokemon.id}</div>
                    <img className={styles.img} src={pokemon.sprites.other.official_artwork.front_default} alt={`pokemonImage${pokemon.id}`}/>
                    <div className={styles.name}>{pokemon.name}</div>
                    <div className={styles.types}>{pokemon.types[0]?.type.name}</div>
                </div>
            ))}
            </div>
        </Contents>
    )
}
