type CreateInterval = (
    ele: HTMLElement,
    goal: number,
    beginValue: number,
    speed: number,
    constantChange: number
) => NodeJS.Timer;

/**
 * Creates a breakpointed interval and returns the interval to be cleared at a future point.
 *
 * @param ele - The FIN DOM element.
 * @param goal - The final number before the breakpointed interval will stop
 * @param beginValue - Calculated value between initial textCotnent and expected textContent
 * based on breakpoint parameters which will determine when to begin each breakpointed interval
 * @param speed - The rate at which the breakpointed interval will increment / decrement
 * @param constantChange - The numerical value that the FIN content will 
 * be incremented / decremented by. Default is 1
 */
export const createInterval: CreateInterval = (
    ele,
    goal,
    beginValue,
    speed,
    constantChange
) => {
    const interval = setInterval( () => {
        const currentContent = Number( ele.textContent );

        /* Escape interval if goal is reached */
        if ( currentContent === goal ) clearInterval( interval );


        else {
            const dir = ( Math.sign( constantChange ) === 1 ) 
                ? "ascending" 
                : "descending";

            /** skip DOM modification until content of FIN is within range */
            if ( dir === "ascending" && currentContent < beginValue ) return;
            if ( dir === "descending" && currentContent > beginValue ) return;
            
            ele.textContent = String( currentContent + constantChange );
        }
    }, speed )

    return interval
}