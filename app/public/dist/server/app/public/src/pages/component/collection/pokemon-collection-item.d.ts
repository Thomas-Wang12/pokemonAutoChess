import { Dispatch, SetStateAction } from "react";
import { IPokemonConfig } from "../../../../../models/mongo-models/user-metadata";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokemon-collection-item.css";
export default function PokemonCollectionItem(props: {
    name: Pkm;
    index: string;
    config: IPokemonConfig | undefined;
    filter: string;
    shinyOnly: boolean;
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
}): import("react/jsx-runtime").JSX.Element | null;
