import React from 'react'
import styles from './App.module.scss'
import pokemonLogo from './pokemonVendingMachine/images/pokemon-logo.png'
import {Link, Route, Routes} from 'react-router-dom'
import Contents from './Contents'
import HomeScreen from "./pokemonVendingMachine/home/HomeScreen";
import MyCardScreen from './pokemonVendingMachine/myCardScreen/MyCardScreen'
import Pokemon from './pokemonVendingMachine/models/Pokemon'
import UnpackScreen from './pokemonVendingMachine/unpackScreen/UnpackScreen'

export interface PokemonRepo {
    getMyPokemon(): Pokemon[]
}

export interface AppProps {
    pokemonRepo: PokemonRepo
}

export default function App(props: AppProps) {
    return (
        <>
            <header className={styles.header}>
                <Contents>
                    <div className={styles.headerContents}>
                        <img className={styles.logo} src={pokemonLogo} alt="pokemon-logo"/>
                        <div className={styles.headerButtonArea}>
                            <Link to="/" className={styles.headerButton}>ホーム</Link>
                            <Link to="/my-card" className={styles.headerButton}>マイカードリスト</Link>
                        </div>
                    </div>
                </Contents>
            </header>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/unpack"
                       element={<UnpackScreen pokemonRepo={props.pokemonRepo}/>}
                />
                <Route path="/my-card"
                       element={<MyCardScreen pokemonRepo={props.pokemonRepo}/>}
                />
            </Routes>
        </>
    )
}
