import { Rarity } from "../../../../../types/enum/Game";
import { Pkm } from "../../../../../types/enum/Pokemon";
export default function WikiPokemons(): import("react/jsx-runtime").JSX.Element;
export declare function WikiPokemon(props: {
    rarity: Rarity;
    selected: Pkm | "";
    onSelect: (pkm: Pkm) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function WikiAllPokemons(): import("react/jsx-runtime").JSX.Element;
