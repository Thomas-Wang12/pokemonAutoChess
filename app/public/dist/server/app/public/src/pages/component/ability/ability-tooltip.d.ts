import { Ability } from "../../../../../types/enum/Ability";
import "./ability-tooltip.css";
export declare function AbilityTooltip(props: {
    ability: Ability;
    stats?: {
        stars: number;
        ap: number;
        luck: number;
    };
}): import("react/jsx-runtime").JSX.Element;
