import React from "react";
import InfiniteLoader from 'react-window-infinite-loader';

export interface InfiniteScrollWrapperProps {
    hasNextPage: boolean;
}


/**
 * Wrapper to implement infinite scrolling for a react-window list component.
 *
 * @param hasMoreItemsToLoad - Used to check if there are more items to load or not.
 * @param isNextPageLoading
 * @param itemCount - The length of the total amount of items to be rendered by the list component.
 * @param handleLoadingMoreItems - Callback used to load more items.
 * Usually something that executes a fetch from an API and will populate the state.
 * @param children - List component to be called back to.
 * @constructor
 */
export const InfiniteScrollWrapper = ( {
    hasMoreItemsToLoad,

    // Are we currently loading a page of items?
    // (This may be an in-flight flag in your Redux store for example.)
    isNextPageLoading,
    itemsCount,
    handleLoadingMoreItems,
    children: ListChild
} ) => {
    /* Add an extra row to hold a loading indicator if there are more items to load. */
    const itemCountWithLoad = hasMoreItemsToLoad ? itemsCount + 1 : itemsCount;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreItems = () => {
        if ( !isNextPageLoading ) return;
        handleLoadingMoreItems();
    }

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = index => !hasMoreItemsToLoad || index < itemsCount;


    return (
        <InfiniteLoader
            isItemLoaded={ isItemLoaded }
            itemCount={ itemCountWithLoad }
            loadMoreItems={ loadMoreItems }
        >
            { ( args ) => ListChild( { ...args, itemCount: itemCountWithLoad, isItemLoaded } ) }
        </InfiniteLoader>
    );
}