import {screen} from '@testing-library/react'
import renderApplication from '../RenderApplication'
import AppPropsBuilder from '../../AppPropsBuilder'
import StubPokemonRepo from '../StubPokemonRepo'
import {PokemonBuilder} from '../../pokemonVendingMachine/models/Pokemon'

describe('カードリスト画面', () => {
    test('カードリスト画面のページタイトルが表示されている', async () => {
        await renderApplication('/my-card', (new AppPropsBuilder()).build())


        const pageTitle = screen.getAllByText('マイカードリスト')
        expect(pageTitle.length).toEqual(2)
    })

    test('過去にGetしたポケモンカードの枚数を見ることができる', async () => {
        const stubPokemonRepo = new StubPokemonRepo()
        stubPokemonRepo.getMyPokemon_returnValue = [
            (new PokemonBuilder()).withId(1).build(),
            (new PokemonBuilder()).withId(2).build(),
        ]
        const appProps = (new AppPropsBuilder())
            .withPokemonRepo(stubPokemonRepo)
            .build()


        await renderApplication('/my-card', appProps)

        expect(screen.getByText('全2枚')).toBeInTheDocument()
    })

    test('過去にGetしたポケモンのそれぞれの情報を見ることができる', async () => {
        const stubPokemonRepo = new StubPokemonRepo()
        stubPokemonRepo.getMyPokemon_returnValue = [
            (new PokemonBuilder())
                .withId(1)
                .withName("bulbasaur")
                .withTypes([{type: {name: "grass"}}])
                .withFrontDefaultSprite("https://example.com/sprites/1")
                .build(),
            (new PokemonBuilder())
                .withId(2)
                .withName("ivysaur")
                .withTypes([{type: {name: "normal"}}])
                .withFrontDefaultSprite("https://example.com/sprites/2")
                .build(),
        ]
        const appProps = (new AppPropsBuilder())
            .withPokemonRepo(stubPokemonRepo)
            .build()


        await renderApplication('/my-card', appProps)

        expect(screen.getByText('#1')).toBeInTheDocument()
        expect(screen.getByText('bulbasaur')).toBeInTheDocument()
        expect(screen.getByText('grass')).toBeInTheDocument()
        let image1 = screen.getByAltText('pokemonImage1') as HTMLImageElement
        expect(image1.src).toEqual("https://example.com/sprites/1")

        expect(screen.getByText('#2')).toBeInTheDocument()
        expect(screen.getByText('ivysaur')).toBeInTheDocument()
        expect(screen.getByText('normal')).toBeInTheDocument()
        let image2 = screen.getByAltText('pokemonImage2') as HTMLImageElement
        expect(image2.src).toEqual("https://example.com/sprites/2")
    })
})