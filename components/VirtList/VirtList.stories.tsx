import { VirtList } from "./VirtList";
import React, { useState } from "react";

export default {
    title: "VirtList",
    component: VirtList
}


export interface StateItem {
    label: string,
    isActive: boolean
}

export interface RowData {
    items: StateItem[],
    toggleItemActive: ( index: number ) => void
}

const generateItems = numItems => Array.from( { length: numItems }, _ => ( {
    isActive: false,
    label: Math.random()
        .toString( 36 )
        .substr( 2 ),
} ) );


const Template = ( { height, width, itemCount } ) => {
    const [items, setItems] = useState( generateItems( itemCount ) );

    const toggleItemActive = ( index: number ) => {
        setItems( prev => {
            const item = prev[index];
            const prevCopy = [...prev];
            prevCopy[index] = {
                ...item,
                isActive: !item.isActive,
            };
            return prevCopy;
        } );
    }

    return (
        <VirtList
            height={ height }
            items={ items }
            toggleItemActive={ toggleItemActive }
            width={ width }
        />
    );
};

export const Example = Template.bind( {} );
Example.args = {
    height: 150,
    width: 300,
    itemCount: 1000
}