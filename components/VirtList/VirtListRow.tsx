import React from "react";
import { ListChildComponentProps } from "react-window";
import { RowData } from "./VirtList.stories";

type VirtListRowProps = ListChildComponentProps<RowData>
type VirtListRow = React.FC<VirtListRowProps>;

/**
 * Component representing each row in VirtList.
 * @param data
 * @param index
 * @param style
 * @constructor
 */
export const VirtListRow: VirtListRow = ( { data, index, style } ) => {
    const { items, toggleItemActive } = data;
    const item = items[index];

    return (
        <div onClick={ () => toggleItemActive( index ) } style={ style }>
            { item.label } is { item.isActive ? 'active' : 'inactive' }
        </div>
    );
}