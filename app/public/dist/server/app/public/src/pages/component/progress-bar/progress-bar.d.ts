import * as React from "react";
import "./progress-bar.css";
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    min?: number;
    now?: number;
    max?: number;
    label?: React.ReactNode;
    visuallyHidden?: boolean;
    striped?: boolean;
    animated?: boolean;
    variant?: "success" | "danger" | "warning" | "info" | string;
    isChild?: boolean;
}
declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
