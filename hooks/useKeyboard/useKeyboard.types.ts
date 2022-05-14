import { acceptableKeys } from "./acceptableKeys";

export type KeyboardModifier = "ctrl" | "shift" | "alt" | "meta";
export type KeyboardAction = ( event: KeyboardEvent ) => void;

export interface KeyDownCondition {
    key: typeof acceptableKeys[number],
    mods?: KeyboardModifier[],
    action: KeyboardAction
}