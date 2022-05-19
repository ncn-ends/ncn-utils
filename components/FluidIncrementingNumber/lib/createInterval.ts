type CreateInterval = (
    ele: HTMLElement,
    goal: number,
    beginValue: number,
    speed: number,
    constantChange: number
) => NodeJS.Timer;

export const createInterval: CreateInterval = (
    ele,
    goal,
    beginValue,
    speed,
    constantChange
) => {

    const interval = setInterval( () => {
        const currentContent = Number( ele.textContent );

        if ( currentContent === goal ) clearInterval( interval )
        else {
            if ( constantChange > 0 && currentContent >= beginValue ) {
                ele.textContent = String( currentContent + constantChange );
            }
            if ( constantChange < 0 && currentContent <= beginValue ) {
                ele.textContent = String( currentContent + constantChange );
            }
        }
    }, speed )

    return interval
}