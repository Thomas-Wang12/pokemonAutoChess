import { Dispatch, SetStateAction } from "react";
import { IMeta } from "../../../../../models/mongo-models/meta";
import "./meta-chart.css";
export declare function MetaChart(props: {
    meta: IMeta[];
    setSelectedComposition: Dispatch<SetStateAction<string | undefined>>;
}): import("react/jsx-runtime").JSX.Element;
