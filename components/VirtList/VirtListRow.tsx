import React from "react";
import { VirtListRowProps } from "./VirtList.types";


/**
 * Component representing each row in VirtList.
 * @param data
 * @param index
 * @param style
 * @constructor
 */
export const VirtListRow: React.FC<VirtListRowProps> = ( { data, index, style } ) => {
    const { author, title } = data[index];

    return (
        <div style={ style }>
            { author } { title }
        </div>
    );
}