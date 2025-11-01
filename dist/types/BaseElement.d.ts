import { Mountable } from "./Mountable";
export declare class BaseElement extends Mountable {
    constructor({ element }: {
        element: HTMLElement;
    });
    protected onAttached(): void;
}
