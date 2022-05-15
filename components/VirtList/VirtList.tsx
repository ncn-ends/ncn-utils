import React, { memo } from 'react';
import memoize from 'memoize-one';
import { areEqual, FixedSizeList as List } from 'react-window';
import { VirtListProps } from "./VirtList.types";

/**
 * This helper function memoizes incoming props,
 * To avoid causing unnecessary re-renders pure Row components.
 * This is only needed since we are passing multiple props with a wrapper object.
 * If we were only passing a single, stable value (e.g. items),
 * We could just pass the value directly.
 */
const createItemData = memoize( ( items, toggleItemActive ) => ( {
    items,
    toggleItemActive,
} ) );

/**
 * Higher order component representing a virtualized list
 *
 * @remarks
 * Abstraction over react-window with some imports from react-virtualized
 *
 *
 * @example How to use
 * ```ts
 * <VirtList height={100} width={350} items={items} toggleItemActive={toggleItemActive} />
 * ```
 *
 * @param height - Height of the list container in px.
 * @param width - Width of the list container in px.
 * @param items - Array of items to be rendered by the list component
 * @param children - Row component that will be rendered for each item in the list
 * @param toggleItemActive - Action to be taken on click. Passed to row component to be handled by row component.
 */
export const VirtList: React.FC<VirtListProps> = ( { 
    height, 
    items, 
    toggleItemActive, 
    width, 
    children 
} ) => {
    const itemData = createItemData( items, toggleItemActive );
    const Row = memo(children, areEqual);

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