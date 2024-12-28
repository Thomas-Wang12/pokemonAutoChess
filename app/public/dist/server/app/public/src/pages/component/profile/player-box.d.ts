import { IGameRecord } from "../../../../../models/colyseus-models/game-record";
import { IUserMetadata } from "../../../../../models/mongo-models/user-metadata";
export default function PlayerBox(props: {
    user: IUserMetadata;
    history?: IGameRecord[];
}): import("react/jsx-runtime").JSX.Element;
