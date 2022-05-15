export type DebouncedFunc = ( ...args: unknown[] ) => void;
export type Debounce = ( fn: Function, delay: number ) => DebouncedFunc;

const debounce: Debounce = ( fn, delay ) => {
    let timerId;
    return ( ...args ) => {
        clearTimeout( timerId );
        timerId = setTimeout( () => fn( ...args ), delay );
    }
};

export { debounce };