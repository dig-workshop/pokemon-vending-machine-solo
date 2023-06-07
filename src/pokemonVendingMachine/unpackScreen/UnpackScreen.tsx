import {PokemonRepo} from '../../App'
import styles from './UnpackScreen.module.scss'
import {useNavigate} from "react-router-dom";

export default function UnpackScreen(props: { pokemonRepo: PokemonRepo }) {
    const navigater = useNavigate()

    return (
        <div className={styles.container}>
            <h1>Pokemon Vending Machine</h1>
            <div>
                <div>bulbasaur</div>
                <div>ivysaur</div>
                <div>venusaur</div>
                <div>charmander</div>
                <div>charmeleon</div>
            </div>
            <button
                type="button"
                onClick={e => {
                    navigater('/')
                }}
            >
                Buy New Pack
            </button>
        </div>
    )
}
