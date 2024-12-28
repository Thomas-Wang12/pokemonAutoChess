import { Dispatch, SetStateAction } from "react";
import "./jukebox.css";
export default function Jukebox(props: {
    show: boolean;
    handleClose: Dispatch<SetStateAction<void>>;
}): import("react/jsx-runtime").JSX.Element;
