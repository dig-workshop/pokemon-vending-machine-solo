interface PokemonTypeSlot {
    type: PokemonType
}

interface PokemonType {
    name: string
}

interface Sprites {
    other: OtherSprites
}

interface OtherSprites {
    official_artwork: OfficialArtwork
}

interface OfficialArtwork {
    front_default: string
}

export default interface Pokemon {
    id: number
    name: string
    types: PokemonTypeSlot[]
    sprites: Sprites
}

export class PokemonBuilder {
    id: number = 0
    name: string = ''
    types: PokemonTypeSlot[] = []
    sprites: Sprites = {other: {official_artwork: {front_default: ''}}}

    withId(newValue: number): PokemonBuilder {
        this.id = newValue
        return this
    }

    withName(newValue: string): PokemonBuilder {
        this.name = newValue
        return this
    }

    withTypes(newValue: PokemonTypeSlot[]): PokemonBuilder {
        this.types = newValue
        return this
    }

    withFrontDefaultSprite(newValue: string): PokemonBuilder {
        this.sprites = {other: {official_artwork: {front_default: newValue}}}
        return this
    }

    build(): Pokemon {
        return {
            id: this.id,
            name: this.name,
            types: this.types,
            sprites: this.sprites,
        }
    }
}