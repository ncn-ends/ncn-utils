import React, { useEffect, useRef } from "react";
import { initializeContent } from "./lib/initializeContent";

export interface FluidIncrementingNumberProps {
    value: number | null;
    id: string
}

/**
 * Fluidly increments or decrements number values with a tapered effect at the end.
 *
 * @remarks
 * To be treated like a span element.
 *
 * @remarks
 * There is a hidden child element containing the raw value to satisfy SSR.
 * The actual fluidly incrementing number is reliant on the DOM to be loaded,
 * so it will not be rendered during the SSR stage.
 *
 * @example
 * ```ts
 * import {FluidIncrementingNumber as FINum} from '@/components/FluidIncrementingNumber'
 * <FINum>
 *
 * ```
 *
 * @param value
 * @param id
 */
export const FluidIncrementingNumber: React.FC<FluidIncrementingNumberProps> = ( {
    value = null,
    id
} ) => {

    useEffect( () => {
        console.log( 'changing', value );
        const ele = document.querySelector<HTMLElement>( `#${ id } .fin_fluid-content` );
        initializeContent(ele, value);

        const firstStageInterval = setInterval( () => {
            console.log( 'interval going' );
            let dir: 1 | -1;
            const currentContent = Number( ele.textContent );

            if ( currentContent > value ) dir = -1
            else dir = 1;

            if ( currentContent === value ) clearInterval( firstStageInterval )
            else {
                ele.textContent = String( currentContent + dir );
            }
        }, 5 )
        
        // TODO: clear intervals on return
    }, [value] )


    return (
        <span id={ id }>
            <span
                className="fin_ssr-safe-content"
                style={ { display: "none" } }
            >{ value }</span>
            <span className="fin_fluid-content"></span>
        </span>
    )
}