import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from 'react-dom';

/**
 * Creates DOM element to be used as React root.
 */
function createRootElement( id: string ): HTMLElement {
    const rootContainer = document.createElement( "div" );
    rootContainer.setAttribute( "id", id );

    return rootContainer;
}

/**
 * Appends element as last child of body.
 * @param {HTMLElement} rootElem
 */
function addRootElement( rootElem: HTMLElement ): void {
    document.body.insertBefore( rootElem, document.body.lastElementChild.nextElementSibling );
}

/**
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
function createOrFindRootElem( id: string ): HTMLElement {
    const rootElemRef = useRef( null );

    useEffect( () => {
        // Look for existing target dom element to append to
        const existingParent = document.getElementById( id );
        // Parent is either a new root or the existing dom element
        const parentElem = existingParent || createRootElement( id );

        // If there is no existing DOM element, add a new one.
        if ( !existingParent ) {
            addRootElement( parentElem );
        }

        // Add the detached element to the parent
        parentElem.appendChild( rootElemRef.current );

        return function removeElement() {
            rootElemRef.current.remove();
            if ( !parentElem.childElementCount ) {
                parentElem.remove();
            }
        };
    }, [id] );

    /**
     * It's important we evaluate this lazily:
     * - We need first render to contain the DOM element, so it shouldn't happen
     *   in useEffect. We would normally put this in the constructor().
     * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
     *   since this will run every single render (that's a lot).
     * - We want the ref to consistently point to the same DOM element and only
     *   ever run once.
     * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
     */
    function getRootElem() {
        if ( !rootElemRef.current ) {
            rootElemRef.current = document.createElement( "div" );
        }

        return rootElemRef.current;
    }

    return getRootElem();
}


export interface PortalProps {
    children: ReactNode,
    id?: string
}

/**
 * Higher order component that manages creation and teardown of root elements and 
 * SSR to create a portal for the children that's passed into it.
 * 
 * @remarks
 * - The component prevents being rendered during SSR inherently, 
 * so there's no need to make preventions for this.
 * 
 * @remarks
 * - No automation testing.
 * 
 * @param id - (Optional) Pass an id to an existing element to attach to that element.
 * An element with a unique ID will be generated if one isn't provided.
 * @param children - Children passed to the component.
 * @constructor
 */
export const Portal: React.FC<PortalProps> = ( { id, children } ) => {
    const target = createOrFindRootElem( id );

    return createPortal( children, target );
};