import React, { ChangeEventHandler } from "react";
import './StdInput.css';

type Props = {
    id: string,
    label: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    validation: Function,
    value?: string | number | readonly string[],
    width?: string,
    type?: string
}

export const StdInput: React.FC<Props> = ( {
                                               id,
                                               label,
                                               onChange,
                                               value,
                                               validation,
                                               type = "text",
                                               width = "100%",
                                               ...props
                                           } ) => {
    // const validationExists = !!validation;
    // const isValid = validation();
    // const validationIndicator = isValid
    //     ? "G"
    //     : "B";

    return (
        <div
            className="std-input-group"
            style={ { width: width } }
        >
            <input
                placeholder={ label }
                name={ id }
                id={ id }
                required
                autoComplete="off"
                value={ value }
                onChange={ onChange }
                type={ type }
                { ...props }
            />
            <label htmlFor={ id }>{ label }</label>
            {/*{ validationExists &&*/ }
            {/*    <aside className="validation-indicator">*/ }
            {/*        { validationIndicator }*/ }
            {/*    </aside>*/ }
            {/*}*/ }
        </div>
    )
};