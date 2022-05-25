import React from "react";
import { ToastStateItem } from "./Toast.types";
import { IconDisplay } from "./IconDisplay";
import { ccl } from "../../../utils/ccl/ccl";

type ToastItem = React.FC<{ item: ToastStateItem }>

export const ToastItem: ToastItem = ( { item } ) => {
    return (
        <li className={ ccl("toast-item", `toast-item-${item.type}`) }>
            <div className="toast-item-content">
                { IconDisplay( item ) }
                <p className="toast-item-text">{ item.content }</p>
            </div>
            <div className="toast-progress-bar" />
        </li>
    )
}