import { Pokemon } from "../../../../../models/colyseus-models/pokemon";
import { Emotion } from "../../../../../types";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-detail.css";
export declare function GamePokemonDetail(props: {
    pokemon: Pkm | Pokemon;
    shiny?: boolean;
    emotion?: Emotion;
}): import("react/jsx-runtime").JSX.Element;
