import { Dispatch, SetStateAction } from "react";
import { Page } from "../main-sidebar/main-sidebar";
import "./game-options-modal.css";
export default function GameOptionsModal(props: {
    show: boolean;
    hideModal: Dispatch<SetStateAction<void>>;
    page: Page;
}): import("react/jsx-runtime").JSX.Element;
