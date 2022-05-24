import './lib/toast-default.css'
import { ToastItem } from "./lib/ToastItem";

export interface ToastProps {
    items: unknown[]
}

export type Toast = React.FC<ToastProps>
/**
 * Non-obtrusive pop up informative notification
 */
export const Toast: Toast = ( { items } ) => {
    return (
        <aside className="toast-container">
            <ol className="toast-list">
                { items.map( item => <ToastItem item={ item } /> ) }
            </ol>
        </aside>
    )
}