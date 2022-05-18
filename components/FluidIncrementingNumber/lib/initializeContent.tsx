type InitializeContent = (ele: HTMLElement, value: number | null) => void;
/**
 * Initializes the text content in the DOM if the text content is empty
 */
export const initializeContent: InitializeContent = (ele, value) => {
    if ( ele.textContent === "" ) {
        ele.textContent = String( value );
        return;
    }
}