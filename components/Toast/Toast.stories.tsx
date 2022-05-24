import React, { useState } from "react";
import { Toast } from "./Toast";
import { DocumentScreen } from "../DocumentScreen/DocumentScreen";

export default {
    title: "Toast",
    component: Toast
}

const Template = ( {} ) => {
    const [items, setItems] = useState<any[]>( [1, 2, 3, 4, 5, 6, 7, 8, 9] );

    return (
        <>
            <DocumentScreen>
                <button onClick={ () => setItems( prev => [...prev, new Date().toISOString()] ) }>Add Item</button>
            </DocumentScreen>
            <Toast items={ items } />
        </>
    )
}


export const Example
    =
    Template.bind
    ( {} )
;
Example.args
    = {}