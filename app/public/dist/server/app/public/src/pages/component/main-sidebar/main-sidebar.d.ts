import "./main-sidebar.css";
export type Page = "main_lobby" | "preparation" | "game";
interface MainSidebarProps {
    page: Page;
    leave: () => void;
    leaveLabel: string;
}
export declare function MainSidebar(props: MainSidebarProps): import("react/jsx-runtime").JSX.Element;
export type Modals = "profile" | "meta" | "wiki" | "team-builder" | "collection" | "booster" | "news" | "options" | "keybinds" | "jukebox" | "announcement" | "tournaments" | "servers";
export {};
