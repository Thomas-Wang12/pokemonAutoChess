export type Gadget = {
    name: string;
    description: string;
    icon: string;
    levelRequired: number;
    disabled?: boolean;
};
export declare const GADGETS: {
    readonly TRAINER_CARD: Gadget;
    readonly BAG: Gadget;
    readonly TEAM_PLANNER: Gadget;
    readonly JUKEBOX: Gadget;
    readonly BOT_BUILDER: Gadget;
    readonly GAMEBOY: Gadget;
};
