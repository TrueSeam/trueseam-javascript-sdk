export declare abstract class Mountable<TElement extends HTMLElement = HTMLElement> {
    protected readonly element: TElement;
    private readonly listeners;
    constructor(element: TElement);
    protected abstract onAttached(): void;
    addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    /**
     * Attaches the element to a parent element
     * @param parent The parent element
     */
    attachTo(parent: Mountable | TElement): void;
    /**
     * Detaches the current element from the tree
     */
    detach(): void;
    /**
     * Detaches the current element and performs cleanup
     */
    destroy(): void;
    /**
     * Applies styles to the element
     * @param style A style object
     */
    style(style: Partial<CSSStyleDeclaration>): void;
}
