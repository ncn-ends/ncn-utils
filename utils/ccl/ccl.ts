type FalseyValue = undefined | null | false;

/**
 * Combines an array of strings after filtering out falsey values to produce a single string representing a classlist.
 * 
 * @param args - Array of strings each representing a classname. Falsey values will be filtered out.
 * @returns Single string representing a classname
 */
export const ccl = ( ...args: Array<string | FalseyValue> ): string => {
    return args.filter( arg => arg ).join( " " )
}