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

/**
 * Creates the interval sequence and returns the array of the intervals.
 * 
 * @remarks 
 * - An interval will be created for each breakpoint passed into `breakpoints`.
 * 
 * @param ele - The FIN DOM element.
 * @param startValue - The current value of the content of the FIN DOM element.
 * @param nextValue - The value the FIN DOM element should ascend / descend to.
 * @param scale - The constant value that the content should be incremented / derecremented by.
 * @param breakpoints - Customized breakpoints that dictate the speed and 
 * transitional steps of the element.
 */
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