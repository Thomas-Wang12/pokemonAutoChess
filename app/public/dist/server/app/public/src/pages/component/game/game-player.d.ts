import { IPlayer } from "../../../../../types";
import "react-circular-progressbar/dist/styles.css";
import "./game-player.css";
export default function GamePlayer(props: {
    player: IPlayer;
    click: (id: string) => void;
    index: number;
}): import("react/jsx-runtime").JSX.Element;
