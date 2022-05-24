import React from "react";
import { IoCheckmarkSharp } from 'react-icons/io5';


export interface ToastItemProps {
    item: string
}

type ToastItem = React.FC<ToastItemProps>

export const ToastItem: ToastItem = ( { item } ) => {
    return (
        <li className="toast-item">
            <div className="toast-item-content">
                <IoCheckmarkSharp className="toast-item-icon" />
                <p className="toast-item-text">{ item }</p>
            </div>
            <div className="toast-progress-bar" />
        </li>
    )
}