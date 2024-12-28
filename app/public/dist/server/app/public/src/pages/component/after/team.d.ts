import { ArraySchema } from "@colyseus/schema";
import { IPokemonRecord } from "../../../../../models/colyseus-models/game-record";
import "./team.css";
export default function Team(props: {
    team: IPokemonRecord[] | ArraySchema<IPokemonRecord>;
}): import("react/jsx-runtime").JSX.Element;
