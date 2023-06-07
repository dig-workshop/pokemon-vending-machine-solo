
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