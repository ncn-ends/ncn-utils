import React, { SetStateAction } from "react";
import { ListChildComponentProps } from "react-window";

type RowItem = {
    label: string,
    isActive: boolean
};
export interface RowData {
    items: RowItem[],
    toggleItemActive: (index: number) => void
}

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