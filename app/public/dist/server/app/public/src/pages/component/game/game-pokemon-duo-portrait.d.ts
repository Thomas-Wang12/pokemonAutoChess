import React from "react";
import { PkmDuo } from "../../../../../types/enum/Pokemon";
import "./game-pokemon-portrait.css";
export default function GamePokemonDuoPortrait(props: {
    index: number;
    origin: string;
    duo: PkmDuo;
    click?: React.MouseEventHandler<HTMLDivElement>;
}): import("react/jsx-runtime").JSX.Element;
