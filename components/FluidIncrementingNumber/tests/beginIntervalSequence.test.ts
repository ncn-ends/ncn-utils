import { beginIntervalSequence } from "../lib/beginIntervalSequence";
import { defaultBreakpoints } from '../lib/defaultBreakpoints';

describe( "beginIntervalSequence tests", () => {
    test( "???", () => {
        const ele = document.createElement( "span" );
        const startValue = 123;
        const nextValue = 555;
        const something = beginIntervalSequence( ele, startValue, nextValue )

        expect( something.length ).toBe( 3 );
        expect( something.every( x => typeof x === "function" ) ).toBeTruthy()
    } )
} );