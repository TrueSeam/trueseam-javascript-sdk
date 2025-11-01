export declare abstract class Mountable {
    protected readonly element: HTMLElement;
    constructor(element: HTMLElement);
    protected abstract onAttached(): void;
    /**
     * Attaches the element to a parent element
     * @param parent The parent element
     */
    attachTo(parent: Mountable | HTMLElement): void;
    /**
     * Detaches the current element from the tree
     */
    detach(): void;
}
