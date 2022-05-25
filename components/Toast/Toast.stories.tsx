import React, { useState } from "react";
import { Toast } from "./Toast";
import { DocumentScreen } from "../DocumentScreen/DocumentScreen";

export default {
    title: "Toast",
    component: Toast
}

const Template = ( {} ) => {
    const [items, setItems] = useState<string[]>( [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h"
    ] );

    const AddButton = <button
        onClick={ () => setItems( prev => [...prev, new Date().toISOString()] ) }
    >Add Toast Item</button>

    return (
        <>
            <DocumentScreen>
                { AddButton }
            </DocumentScreen>
            <Toast
                items={ items }
                duration={ 10000 }
            />
        </>
    )
}


export const Example = Template.bind( {} )
Example.args = {}