import { useEffect } from "react";
import { acceptableKeys } from "./acceptableKeys";
import { KeyDownCondition } from "./useKeyboard.types";


type UseKeyboard = ( keys: KeyDownCondition[] ) => void;

/**
 * Custom hook to handle keyboard pressdown events.
 * @param keyConditions - An array of key conditions to handle.
 * @example
 * Handles an event which focuses an element by id when ctrl+f is pressed:
 * ```
 * useKeyboard( [{
 *      key: "f", mods: ["ctrl"], action: ( e ) => {
 *          e.preventDefault();
 *          document.querySelector( "#filter-searchbar" ).focus();
 *      }
 * }] );
 * ```
 */
const useKeyboard: UseKeyboard = ( keyConditions ) => {
    const unknownKeys = keyConditions.filter( cond => !acceptableKeys.includes( cond.key ) );
    if ( unknownKeys.length ) {
        console.warn( "Some key event conditions include unknown keys. This is probably due to a typo.\nView the docs for a list of acceptable keys: ", unknownKeys )
    }

    useEffect( () => {
        function handleKeyDown( event: KeyboardEvent ) {
            const foundMatch = keyConditions.find( condition => {
                if ( event.key !== condition.key ) return false;
                if ( !condition.mods ) return true;
                const matchesMods = condition.mods.every( mod => event[mod + "Key"] );
                if ( matchesMods ) return true;
            } )

            const defaultAction = keyConditions.find( condition => condition.key === "all" );
            if ( defaultAction ) defaultAction.action( event );
            if ( !foundMatch ) return;

            foundMatch.action( event );
        }

        document.addEventListener( 'keydown', handleKeyDown );

        return function cleanup() {
            document.removeEventListener( 'keydown', handleKeyDown );
        }
    }, [] );
}

export { useKeyboard };