import { ccl } from './ccl';

describe( 'combines classnames into a single classlist', () => {
    test( 'various types passed into function directly', () => {
        const actual = ccl(
            "classA", 
            "classB", 
            false, 
            false && "classC",
            null ?? "classD",
            undefined || "classE",
            null && undefined,
            null && "classF",
            undefined && "classG"
        )
        const expected = "classA classB classD classE" 
        expect( actual ).toBe( expected );
    } );
} )