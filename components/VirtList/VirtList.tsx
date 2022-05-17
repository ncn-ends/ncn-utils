import React, { memo } from 'react';
import memoize from 'memoize-one';
import { areEqual, FixedSizeList } from 'react-window';
import { VirtListProps } from "./VirtList.types";
import { InfiniteScrollWrapper } from "./InfiniteScrollWrapper";

/**
 * This helper function memoizes incoming props,
 * To avoid causing unnecessary re-renders pure Row components.
 * This is only needed since we are passing multiple props with a wrapper object.
 * If we were only passing a single, stable value (e.g. items),
 * We could just pass the value directly.
 */
const createItemData = memoize( ( args ) => ( {
    ...args
} ) );

/**
 * Higher order component representing a virtualized list that infinite scrolls.
 *
 * @remarks
 * - Abstraction over FixedSizeList from react-window with some imports from react-virtualized
 * - Using FixedSizeList because each item in the row should be the same size
 *
 *
 * @example How to use
 * ```ts
 * <VirtList
 *      height={100}
 *      width={350}
 *      items={items}
 *      toggleItemActive={toggleItemActive}
 *      children={VirtListRow}
 * />
 * ```
 *
 * @param height - Height of the list container in px.
 * @param width - Width of the list container in px.
 * @param items - Array of items to be rendered by the list component
 * @param hasMoreItemsToLoad
 * @param isNextPageLoading
 * @param handleLoadingMoreItems
 * @param children - Row component that will be rendered for each item in the list
 */
export const VirtList: React.FC<VirtListProps> = ( {
    height,
    items,
    width,
    hasMoreItemsToLoad,
    isNextPageLoading,
    handleLoadingMoreItems,
    children
} ) => {
    const itemData = createItemData( items );
    const Row = memo( children, areEqual );

    const List = ( { onItemsRendered, ref, itemCount, isItemLoaded } ) => (
        <FixedSizeList
            height={ height }
            itemData={ itemData }
            itemSize={ 50 }
            width={ width }

            itemCount={ itemCount }
            onItemsRendered={ onItemsRendered }
            ref={ ref }
        >
            { ( args ) => {
                console.log( args );
                return Row( { ...args, isItemLoaded } )
            } }
        </FixedSizeList>
    )

    return (
        <InfiniteScrollWrapper
            hasMoreItemsToLoad={ hasMoreItemsToLoad }
            isNextPageLoading={ isNextPageLoading }
            itemsCount={ itemData.length }
            handleLoadingMoreItems={ handleLoadingMoreItems }
        >
            { List }
        </InfiniteScrollWrapper>
    )
}