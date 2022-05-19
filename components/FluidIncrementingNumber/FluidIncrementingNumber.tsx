import React, { useEffect } from "react";
import { initializeContent } from "./lib/initializeContent";
import { beginIntervalSequence } from "./lib/beginIntervalSequence";

export interface FluidIncrementingNumberProps {
    value: number | null;
    id: string
}

/**
 * Fluidly increments or decrements number values with a tapered effect at the end.
 *
 * @remarks
 * - To be treated like a span element.
 *
 * @remarks
 * - There is a hidden child element containing the raw value to satisfy SSR.
 * - The actual fluidly incrementing number is reliant on the DOM to be loaded,
 * so it will not be rendered during the SSR stage.
 *
 * @remarks
 * - Not using requestAnimationFrame as setinterval allows better time control,
 * which allows us to taper off the end of the animation and have more customization in the
 * consumer.
 *
 * @example
 * ```
 * import {FluidIncrementingNumber as FINum} from '@/components/FluidIncrementingNumber'
 *
 * const StockPriceDisplay = (stockId) => {
 *  const [price, setPrice] = useState(0)
 *  return (
 *      <FINum
 *          value={price}
 *          id={stockId}
 *      />
 *  )
 * }
 * ```
 */
export const FluidIncrementingNumber: React.FC<FluidIncrementingNumberProps> = ( {
    value = null,
    id,
} ) => {

    useEffect( () => {
        const ele = document.querySelector<HTMLElement>( `#${ id } .fin_fluid-content` );

        initializeContent( ele, value );

        const intervals = beginIntervalSequence(
            ele,
            Number( ele.textContent ),
            value,
            1
        );
        const runningIntervals = intervals.map( x => x() );

        return () => runningIntervals.forEach( interval => clearInterval( interval ) );
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