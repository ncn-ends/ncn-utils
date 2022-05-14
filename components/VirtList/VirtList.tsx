import React, { memo } from 'react';
import memoize from 'memoize-one';
import { areEqual, FixedSizeList as List } from 'react-window';
import { VirtListRow } from "./VirtListRow";

// If list items are expensive to render,
// Consider using PureComponent to avoid unnecessary re-renders.
// https://reactjs.org/docs/react-api.html#reactpurecomponent
const Row = memo(VirtListRow, areEqual );

// This helper function memoizes incoming props,
// To avoid causing unnecessary re-renders pure Row components.
// This is only needed since we are passing multiple props with a wrapper object.
// If we were only passing a single, stable value (e.g. items),
// We could just pass the value directly.
const createItemData = memoize( ( items, toggleItemActive ) => ( {
    items,
    toggleItemActive,
} ) );

// In this example, "items" is an Array of objects to render,
// and "toggleItemActive" is a function that updates an item's state.
export function VirtList( { height, items, toggleItemActive, width } ) {
    // Bundle additional data to list items using the "itemData" prop.
    // It will be accessible to item renderers as props.data.
    // Memoize this data to avoid bypassing shouldComponentUpdate().
    const itemData = createItemData( items, toggleItemActive );

    return (
        <List
            height={ height }
            itemCount={ items.length }
            itemData={ itemData }
            itemSize={ 35 }
            width={ width }
        >
            { Row }
        </List>
    );
}