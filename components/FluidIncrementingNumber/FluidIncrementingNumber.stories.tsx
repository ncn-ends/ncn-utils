import { FluidIncrementingNumber } from "./FluidIncrementingNumber";
import React, { useState } from "react";
import { VirtListRow } from "../VirtList/VirtListRow";
import { handlers } from "../VirtList/mocks/handlers";

export default {
    title: "FluidIncrementingNumber",
    component: FluidIncrementingNumber
}

const Template = ( { value: defaultValue, id } ) => {
    const [value, setValue] = useState<number>( defaultValue );

    return (
        <>
            <input
                type="number"
                value={ value }
                onChange={ e => setValue( Number( e.target.value ) ) }
            />
            <FluidIncrementingNumber value={ value } id={ id } />
        </>
    )
}


export const Example = Template.bind( {} );
Example.args = {
    value: 523,
    id: "something_id"
}