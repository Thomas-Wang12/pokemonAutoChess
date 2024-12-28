import { IBot } from "../../../../../models/mongo-models/bot-v2";
import { PkmWithConfig } from "../../../../../types";
export default function BotAvatar(props: {
    bot: IBot;
    onChangeAvatar: (pkm: PkmWithConfig) => void;
    onClick: () => void;
}): import("react/jsx-runtime").JSX.Element;
