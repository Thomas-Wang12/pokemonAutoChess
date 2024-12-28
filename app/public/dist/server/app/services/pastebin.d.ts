import { FormatType } from "pastebin-ts";
export declare const pastebinService: {
    createPaste(title: string, text: string, format?: FormatType): Promise<{} | undefined>;
    getPaste(id: string, raw: boolean): Promise<string> | undefined;
};
