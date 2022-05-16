import { VirtList } from "./VirtList";
import React, { useEffect, useState } from "react";
import { VirtListRow } from "./VirtListRow";
import { handlers } from './mocks/handlers';
import { Build, BuildsApiResponse } from "./VirtList.types";

export default {
    title: "VirtList",
    component: VirtList
}

// const generateItems = numItems => Array.from( { length: numItems }, _ => ( {
//     isActive: false,
//     label: Math.random()
//         .toString( 36 )
//         .substr( 2 ),
// } ) );

const generateItems = async ( amount: number ): Promise<BuildsApiResponse> => {
    try {
        const fetchedBuilds = await fetch( "/builds" );

        return fetchedBuilds.json();
    } catch ( e ) {
        console.log( e );
    }
}

const Template = ( { height, width, itemCount, children } ) => {

    // const toggleItemActive = ( index: number ) => {
    //     setItems( prev => {
    //         const item = prev[index];
    //         const prevCopy = [...prev];
    //         prevCopy[index] = {
    //             ...item,
    //             isActive: !item.isActive,
    //         };
    //         return prevCopy;
    //     } );
    // }

    const [items, setItems] = useState<BuildsApiResponse>( {} as BuildsApiResponse );
    const { builds } = items;
    useEffect( () => {
        generateItems( itemCount ).then( data => setItems( data ) );
    }, [] )


    return (
        <VirtList
            height={ height }
            items={ builds || [] }
            width={ width }
            children={ children }
        />
    );
};

export const Example = Template.bind( {} );
Example.args = {
    height: 150,
    width: 300,
    itemCount: 1000,
    children: VirtListRow
}
Example.parameters = {
    msw: {
        handlers: handlers
    }
}