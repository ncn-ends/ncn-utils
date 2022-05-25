import './toast-overrides.css'
import './lib/toast-default.css'
import { ToastItem } from "./lib/ToastItem";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { setPropBasedStyling } from "./lib/setPropBasedStyling";
import { getComponentWrapper } from "./lib/getComponentWrapper";
import { ToastStateItem } from "./lib/Toast.types";

export interface ToastProps {
    items: ToastStateItem[],
    setItems: Dispatch<SetStateAction<ToastStateItem[]>>
    duration?: number,
    fadeOutDuration?: number
}

export type Toast = React.FC<ToastProps>
/**
 * Non-obtrusive pop up informative notification
 *
 * @param items - List of toast items as state
 * @param setItems - State action to get rid of items when they expire
 * @param duration - How long the toast should be displayed in ms
 * @param fadeOutDuration - How fast the fade out animation should go in ms
 * @constructor
 */
export const Toast: Toast = ( {
    items = [],
    setItems,
    duration = 3000,
    fadeOutDuration = 500
} ) => {

    useEffect( () => {
        const cssValidDuration = duration + "ms";
        const cssValidFadeDuration = fadeOutDuration + "ms";
        const ele = getComponentWrapper();

        const styles = {
            duration: cssValidDuration,
            fadeOutDuration: cssValidFadeDuration
        }
        const stylesMap = {
            "duration": "--toast-item-duration",
            "fadeOutDuration": "--toast-fade-out-duration"
        }

        setPropBasedStyling( ele, styles, stylesMap );

        if ( items.length ) {
            const timeout = setTimeout( () => {
                setItems( prev => prev.slice( 0, prev.length - 1 ) );
            }, duration + fadeOutDuration )


            return () => clearTimeout( timeout );
        }
    }, [items] )

    return (
        <aside className="toast-container" data-toast-container>
            <ol className="toast-list">
                { items.map( item => <ToastItem item={ item } /> ) }
            </ol>
        </aside>
    )
}