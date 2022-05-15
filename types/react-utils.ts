import React from "react";

/**
 * Use this for any setState function, passing in the type for that state item as the generic.
 * 
 * @remarks
 * Alias for `React.Dispatch<React.SetStateAction<T>>`
 */
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>

/**
 * Use this for onChange functions for input elements.
 * 
 * @remarks
 * Alias for `React.ChangeEventHandler<HTMLInputElement>`
 */
export type InputOnChange = React.ChangeEventHandler<HTMLInputElement>;


/**
 * Use this for onChange functions for select elements.
 *
 * @remarks
 * Alias for `React.ChangeEventHandler<HTMLSelectElement>`
 */
export type SelectOnChange = React.ChangeEventHandler<HTMLSelectElement>;


/**
 * Use this for onChange functions for textarea elements.
 *
 * @remarks
 * Alias for `React.ChangeEventHandler<HTMLTextAreaElement>`
 */
export type TextAreaOnChange = React.ChangeEventHandler<HTMLTextAreaElement>;