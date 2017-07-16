import { Attribute } from './attribute';
export class Ability {
    AbilityCastPoint: number;
    AbilityCastRange: number;
    AbilityCastRangeBuffer: number;
    AbilityChannelTime: number[];
    AbilityDuration: number[];
    AbilityModifierSupportBonus: number;
    AbilityModifierSupportValue: number;
    ID: number;
    SpellImmunityType: string;
    abilitytype: string;
    attribute: Attribute[];
    behaviour: string[];
    cooldown: number[];
    damage: number[];
    displayname: string;
    level: number;
    manacost: number[];
}
