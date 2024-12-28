import { Pkm } from "../../../../../types/enum/Pokemon";
import "./pokemon-typeahead.css";
export declare function PokemonTypeahead({ onChange, value }: {
    value: string;
    onChange: (value: Pkm | "") => void;
}): import("react/jsx-runtime").JSX.Element;
