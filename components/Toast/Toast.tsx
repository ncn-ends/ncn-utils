import './lib/toast-default.css'
import { ToastItem } from "./lib/ToastItem";
import React, { useEffect } from "react";

export interface ToastProps {
    items: string[]
    duration: 3000
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
        
    }, [items] )

    return (
        <aside className="toast-container">
            <ol className="toast-list">
                { items.map( item => <ToastItem item={ item } /> ) }
            </ol>
        </aside>
    )
}