import React from "react";
import "./modal.css";
interface ModalProps {
    show: boolean;
    onClose?: () => void;
    className?: string;
    header?: JSX.Element | string;
    body?: JSX.Element | string;
    footer?: JSX.Element;
    children?: JSX.Element | JSX.Element[];
    confirmText?: string;
}
export declare function Modal(props: ModalProps): React.ReactPortal | null;
export {};
