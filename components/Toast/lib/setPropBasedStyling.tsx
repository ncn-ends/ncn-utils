type setPropBasedStyling = (
    ele: HTMLElement,
    styles: { [key: string]: string },
    stylesMap: { [key: string]: string }
) => void

/**
 * Sets CSS custom properties based on the props passed into the Toast component.
 *
 * @remarks
 * This utility will target the DOM API, so an SSR escape is required.
 *
 * TODO: make this it's own util?
 *
 * @param ele - The DOM node to set the custom properties to. By default will target root.
 * @param styles - Styles object passed via React props.
 * @param stylesMap - Translating styles key to the CSS custom property names.
 */
export const setPropBasedStyling: setPropBasedStyling = (
    ele = document.documentElement,
    styles,
    stylesMap
) => {
    const entries = Object.entries( styles );

    entries.forEach( ( [reactProp, value] ) => {
        const cssProp = stylesMap[reactProp];
        ele.style.setProperty( cssProp, value );
    } )
}