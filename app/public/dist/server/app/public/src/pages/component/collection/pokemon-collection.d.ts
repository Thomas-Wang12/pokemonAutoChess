import { Dispatch, SetStateAction } from "react";
import { Synergy } from "../../../../../types/enum/Synergy";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokemon-collection.css";
export default function PokemonCollection(): import("react/jsx-runtime").JSX.Element;
export declare function PokemonCollectionList(props: {
    type: Synergy | "all";
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
    filter: string;
    sort: string;
    shinyOnly: boolean;
}): import("react/jsx-runtime").JSX.Element;
