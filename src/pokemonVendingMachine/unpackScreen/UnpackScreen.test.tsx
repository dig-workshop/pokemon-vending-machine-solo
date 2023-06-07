import UnpackScreen from "./UnpackScreen";
import {fireEvent, render, screen} from "@testing-library/react";
import {PokemonRepo} from "../../App";
import exp from "constants";

const mockNavigateSpy = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigateSpy
}))

describe('UnpackScreen', () => {
    const dummyPokemonRepo: PokemonRepo = {
        getMyPokemon: jest.fn()
    }
    it('関さんが開封画面を開いている場合、タイトルとボタンが見える', () => {
        // GIVEN

        // WHEN
        render(<UnpackScreen pokemonRepo={dummyPokemonRepo} /> )

        // THEN
        expect(screen.getByText('Pokemon Vending Machine')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'Buy New Pack'})).toBeInTheDocument()
    });

    it('開封画面では、5体のポケモンの名前が表示される', () => {
        // GIVEN

        // WHEN
        render(<UnpackScreen pokemonRepo={dummyPokemonRepo} /> )

        // THEN
        expect(screen.getByText('bulbasaur')).toBeInTheDocument()
        expect(screen.getByText('ivysaur')).toBeInTheDocument()
        expect(screen.getByText('venusaur')).toBeInTheDocument()
        expect(screen.getByText('charmander')).toBeInTheDocument()
        expect(screen.getByText('charmeleon')).toBeInTheDocument()
    });

    it('Buy New Packボタンをクリックすると、パック選択画面に戻る', () => {
        // GIVEN
        render(<UnpackScreen pokemonRepo={dummyPokemonRepo} /> )
        const backButton = screen.getByRole('button', {name: 'Buy New Pack'})

        // WHEN
        fireEvent.click(backButton)

        // THEN
        expect(mockNavigateSpy).toHaveBeenCalledWith('/')
    });
});
