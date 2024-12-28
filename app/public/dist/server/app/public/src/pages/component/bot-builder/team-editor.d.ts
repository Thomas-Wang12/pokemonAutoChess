import React from "react";
import { IDetailledPokemon } from "../../../../../models/mongo-models/bot-v2";
export default function TeamEditor(props: {
    board: IDetailledPokemon[];
    handleEditorClick: (x: number, y: number, rightClick: boolean, itemIndex?: number) => void;
    handleDrop: (x: number, y: number, e: React.DragEvent) => void;
}): import("react/jsx-runtime").JSX.Element;
