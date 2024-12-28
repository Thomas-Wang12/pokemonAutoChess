import { Dispatch, SetStateAction } from "react";
import { Pkm } from "../../../../../types/enum/Pokemon";
import "./unown-panel.css";
export default function UnownPanel(props: {
    setPokemon: Dispatch<SetStateAction<Pkm | "">>;
    filter: string;
    sort: string;
    shinyOnly: boolean;
}): import("react/jsx-runtime").JSX.Element;
