import { PkmWithConfig } from "../../../../../types";
import { Item } from "../../../../../types/enum/Item";
export default function SelectedEntity(props: {
    entity: Item | PkmWithConfig;
    onChange: (pkm: PkmWithConfig) => void;
}): import("react/jsx-runtime").JSX.Element | null;
