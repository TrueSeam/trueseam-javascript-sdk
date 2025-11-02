import { Mountable } from "./Mountable";
export declare class FrameElement extends Mountable<HTMLIFrameElement> {
    constructor({ element }: {
        element: HTMLIFrameElement;
    });
    private onLoaded;
    protected onAttached(): void;
}
