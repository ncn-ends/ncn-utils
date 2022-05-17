import React from "react";
import { VirtListRowProps } from "./VirtList.types";


/**
 * Component representing each row in VirtList.
 * @param data
 * @param index
 * @param style
 * @param isItemLoaded
 * @constructor
 */
export const VirtListRow: React.FC<VirtListRowProps> = ( { data, index, style, isItemLoaded } ) => {
    console.log( "virtlistrowstyle", style );
    let content;
    const { author, title } = data[index];
    if ( !isItemLoaded( index ) ) {
        content = "Loading...";
    } else {
        content = author + title;
    }

    return <div style={ style }>{ content }</div>;
}