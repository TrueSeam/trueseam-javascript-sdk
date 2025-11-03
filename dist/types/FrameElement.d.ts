import { Mountable } from "./Mountable";
export declare class FrameElement extends Mountable<HTMLIFrameElement> {
    private readonly handleMessage;
    private readonly handleClosePopup;
    constructor({ element, onClose, }: {
        element: HTMLIFrameElement;
        onClose: () => void;
    });
    private onMessage;
    private onLoaded;
    protected onAttached(): void;
    destroy(): void;
}
