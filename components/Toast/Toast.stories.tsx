import React, { useState } from "react";
import { Toast } from "./Toast";
import { DocumentScreen } from "../DocumentScreen/DocumentScreen";
import { ToastStateItem } from "./lib/Toast.types";

export default {
    title: "Toast",
    component: Toast
}

const Template = ( {} ) => {
    const [content, setContent] = useState<string>( "" );
    const [items, setItems] = useState<ToastStateItem[]>( [
        { content: "a", type: "info" },
        { content: "b", type: "info" },
        { content: "c", type: "info" },
        { content: "d", type: "info" },
        { content: "e", type: "info" },
        { content: "f", type: "info" },
        { content: "g", type: "info" },
        { content: "h", type: "info" },
    ] );

    const AddButton = ( type ) => <button
        onClick={ () => setItems( prev => [...prev, {
            content,
            type: type
        }] ) }
    >{ `Add as ${ type } Toast Item` }</button>

    return (
        <>
            <DocumentScreen>
                <input type="text" onChange={ ( e ) => setContent( e.target.value ) } />
                { AddButton( "info" ) }
                { AddButton( "confirmation" ) }
                { AddButton( "warning" ) }
                { AddButton( "error" ) }
            </DocumentScreen>
            <Toast
                items={ items }
                duration={ 3000 }
            />
        </>
    )
}


export const Example = Template.bind( {} )
Example.args = {}