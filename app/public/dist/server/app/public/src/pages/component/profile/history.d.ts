import { IGameRecord } from "../../../../../models/colyseus-models/game-record";
import "./history.css";
export default function History(props: {
    uid: string;
    onUpdate?: (history: IGameRecord[]) => void;
}): import("react/jsx-runtime").JSX.Element;
