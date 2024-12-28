import { IMeta } from "../../../../../models/mongo-models/meta";
import { Synergy } from "../../../../../types/enum/Synergy";
export declare function rankType(a: Synergy, b: Synergy, types: {
    [key in Synergy]?: number;
}): number;
export default function TeamComp(props: {
    team: IMeta;
    rank: number;
}): import("react/jsx-runtime").JSX.Element;
