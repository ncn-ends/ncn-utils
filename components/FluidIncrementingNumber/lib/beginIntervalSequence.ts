import { defaultBreakpoints } from "./defaultBreakpoints";
import { mapBreakpointValues } from "./mapBreakpointValues";
import { createInterval } from "./createInterval";
import { Breakpoint } from "./types";

type BeginIntervalSequence = (
    ele: HTMLElement,
    startValue: number,
    nextValue: number,
    scale?: number,
    parameters?: Breakpoint[]
) => ( () => NodeJS.Timer )[];

export const beginIntervalSequence: BeginIntervalSequence = (
    ele,
    startValue,
    nextValue,
    scale = 1,
    breakpoints = defaultBreakpoints
) => {

    const intervalBreakpoints = mapBreakpointValues(
        breakpoints,
        startValue,
        nextValue,
        scale
    )

    const intervalSequence = intervalBreakpoints.map( ( bp, sequencePosition ) => {
        const { speed, beginValue, constantChange } = bp;
        const goal = intervalBreakpoints[sequencePosition + 1]?.beginValue ?? nextValue;
        // console.log( "goal in sequence", goal );

        return () => createInterval(
            ele,
            goal,
            beginValue,
            speed,
            constantChange
        )
    } )

    return intervalSequence;
}