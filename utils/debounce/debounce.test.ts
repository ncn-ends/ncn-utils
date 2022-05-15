import { debounce, DebouncedFunc } from "./debounce";

jest.useFakeTimers();

describe( "debounce testing", () => {
    let func: jest.Mock;
    let debouncedFunc: DebouncedFunc;

    beforeEach( () => {
        func = jest.fn();
        debouncedFunc = debounce( func, 500 );
    } )
    test( "5 calls should result in one call", () => {
        Array.from( { length: 5 }, _ => debouncedFunc() );

        expect( typeof debouncedFunc ).toBe( "function" );

        jest.runAllTimers();

        expect( func ).toBeCalledTimes( 1 );
    } )
} )