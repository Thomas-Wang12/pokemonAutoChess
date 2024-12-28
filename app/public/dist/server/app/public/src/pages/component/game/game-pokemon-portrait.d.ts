import React from "react";
import { Pokemon } from "../../../../../models/colyseus-models/pokemon";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-portrait.css";
export default function GamePokemonPortrait(props: {
    index: number;
    origin: string;
    pokemon: Pokemon | Pkm | undefined;
    click?: React.MouseEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    inPlanner?: boolean;
}): import("react/jsx-runtime").JSX.Element;
