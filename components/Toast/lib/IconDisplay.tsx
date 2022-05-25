import { IoCheckmarkSharp } from "react-icons/io5";
import { BsInfoLg } from 'react-icons/bs';
import { ImWarning } from 'react-icons/im';
import { VscError } from 'react-icons/vsc';
import React from "react";
import { ToastStateItem } from "./Toast.types";

type IconDisplay = ( item: ToastStateItem ) => ( JSX.Element );

export const IconDisplay: IconDisplay = ( item ) => {
    const { type } = item;

    if ( type === "custom" ) return item.icon;

    return {
        "confirmation": <IoCheckmarkSharp className="toast-item-icon toast-icon-confirmation" />,
        "info": <BsInfoLg className="toast-item-icon toast-icon-info" />,
        "warning": <ImWarning className="toast-item-icon toast-icon-warning" />,
        "error": <VscError className="toast-item-icon toast-icon-error" />,
    }[type]
}