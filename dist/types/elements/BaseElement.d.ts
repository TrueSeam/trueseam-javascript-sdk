import { Mountable } from "./Mountable";
export declare class BaseElement<TElement extends HTMLElement> extends Mountable<TElement> {
    constructor({ element }: {
        element: TElement;
    });
    protected onAttached(): void;
}
