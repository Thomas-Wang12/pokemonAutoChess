import { Schema } from "@colyseus/schema";
import { IDps } from "../types";
export default class Dps extends Schema implements IDps {
    id: string;
    name: string;
    physicalDamage: number;
    specialDamage: number;
    trueDamage: number;
    physicalDamageReduced: number;
    specialDamageReduced: number;
    shieldDamageTaken: number;
    heal: number;
    shield: number;
    constructor(id: string, name: string);
    update(physicalDamage: number, specialDamage: number, trueDamage: number, physicalDamageReduced: number, specialDamageReduced: number, shieldDamageTaken: number, heal: number, shield: number): void;
}
