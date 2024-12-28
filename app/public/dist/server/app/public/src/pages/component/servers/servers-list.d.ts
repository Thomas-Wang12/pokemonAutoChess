import "./servers-list.css";
interface ServerInfo {
    name: string;
    url: string;
    logo: string;
    creator: string;
    version: string;
    discord: string;
    location: string;
    description: string;
}
export default function ServersList(): import("react/jsx-runtime").JSX.Element;
export declare function ServerInfo(props: {
    server: ServerInfo;
}): import("react/jsx-runtime").JSX.Element;
export {};
