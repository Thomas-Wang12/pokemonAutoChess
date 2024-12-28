import React from "react";
import { PkmWithConfig } from "../../../../../types";
import { Item } from "../../../../../types/enum/Item";
export default function PokemonPicker(props: {
    selected: PkmWithConfig | Item;
    selectEntity: React.Dispatch<React.SetStateAction<PkmWithConfig | Item>>;
}): import("react/jsx-runtime").JSX.Element;
