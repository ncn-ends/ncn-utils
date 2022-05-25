/**
 * Simple query selector to get the top most element for the component.
 */
export const getComponentWrapper = () => {
    return document.querySelector<HTMLElement>( "[data-toast-container]" );
}