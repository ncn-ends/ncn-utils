import React, { useEffect, useRef } from "react";

export const FluidIncrementingNumber = ( { number = null }: { number: number | null } ): JSX.Element => {
    const displayedNumber = useRef<number>( null )

    // if ( displayedNumber.current === null ) return null;

    useEffect( () => {
        displayedNumber.current = number;
    }, [number] )

    return (
        <div>
            { displayedNumber.current }
        </div>
    )
}