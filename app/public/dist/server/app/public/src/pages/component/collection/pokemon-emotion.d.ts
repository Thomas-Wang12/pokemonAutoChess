import { Emotion } from "../../../../../types";
import "./pokemon-emotion.css";
export default function PokemonEmotion(props: {
    index: string;
    shiny: boolean;
    unlocked: boolean | undefined;
    selected: boolean | undefined;
    path: string;
    emotion: Emotion;
    dust: number;
    onClick: () => void;
}): import("react/jsx-runtime").JSX.Element;
