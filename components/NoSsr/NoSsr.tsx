import { useEffect, useRef, useState } from "react";

/**
 * Higher order component that wraps components that should be ignored from SSR.
 *
 * @remarks
 * No automated testing due to difficulty in testing this usecase. Manually tested instead.
 * Refer to this to implement future automated testing: https://github.com/mui/material-ui/blob/4729495c5354f2880a39352a855ff3bbc8a0103f/packages/mui-base/src/NoSsr/NoSsr.test.js
 *
 * @param children - Any components that are wrapped within
 */
export const NoSsr = ( { children }: { children: React.ReactNode } ): JSX.Element => {
    const [isMounted, setIsMounted] = useState<boolean>( false );

    useEffect( () => {
        setIsMounted( true );
    }, [] );

    return <>{ isMounted ? children : null }</>;
};