import './toast-overrides.css'
import './lib/toast-default.css'
import { ToastItem } from "./lib/ToastItem";
import React, { useEffect } from "react";
import { setPropBasedStyling } from "./lib/setPropBasedStyling";
import { getComponentWrapper } from "./lib/getComponentWrapper";
import { ToastStateItem } from "./lib/Toast.types";

export interface ToastProps {
    items: ToastStateItem[]
    duration: number
}

export type Toast = React.FC<ToastProps>
/**
 * Non-obtrusive pop up informative notification
 *
 * @param items - List of toast items
 * @param duration - How long the toast should be displayed
 * @constructor
 */
export const Toast: Toast = ( {
    items = [],
    duration = 3000
} ) => {

    useEffect( () => {
        const cssValidDuration = duration + "ms";
        const ele = getComponentWrapper();

        const styles = {
            duration: cssValidDuration
        }
        const stylesMap = {
            "duration": "--toast-item-duration"
        }

        setPropBasedStyling( ele, styles, stylesMap );
    }, [items] )

    return (
        <aside className="toast-container" data-toast-container>
            <ol className="toast-list">
                { items.map( item => <ToastItem item={ item } /> ) }
            </ol>
        </aside>
    )
}