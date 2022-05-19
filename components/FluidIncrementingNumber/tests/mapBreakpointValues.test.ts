import { mapBreakpointValues } from "../lib/mapBreakpointValues";
import { defaultBreakpoints } from "../lib/defaultBreakpoints";

describe( "mapBreakpointValues tests", () => {
    test( "should return correct values with ascending change", () => {
        const startValue = 123;
        const nextValue = 523;

        const actual = mapBreakpointValues( defaultBreakpoints, startValue, nextValue );

        expect( actual.length ).toBe( defaultBreakpoints.length );
        expect( actual[1].beginValue ).toBe( startValue + Math.floor( Math.abs( nextValue - startValue ) * actual[1].begin ) );
    } )

    // TODO; implement descending change
} )