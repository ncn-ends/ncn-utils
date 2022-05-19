import { Breakpoint, BreakpointWithStartValue } from "./types";

type MapBreakpointValues = (
    breakpoints: Breakpoint[],
    startValue: number,
    nextValue: number,
    scale?: number
) => BreakpointWithStartValue[];

export const mapBreakpointValues: MapBreakpointValues = (
    breakpoints,
    startValue,
    nextValue,
    scale = 1
) => {
    return breakpoints.reduce( ( acc, bp ) => {
        const valueDiff = Math.abs( nextValue - startValue );
        const dir = nextValue > startValue ? 1 : -1;
        const constantChange = dir * scale;

        const beginValue = startValue + dir * (Math.floor( valueDiff * bp.begin ));

        return [
            ...acc,
            {
                ...bp,
                beginValue,
                constantChange
            }
        ]
    }, [] );
}