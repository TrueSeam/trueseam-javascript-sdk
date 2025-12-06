import { Mountable } from "../types/elements/Mountable";
import { FrameContainerElement } from "../types/elements/FrameContainerElement";
export declare function createContainer(): Mountable;
export declare function createBackdrop(onClick: () => void): Mountable;
export declare function createFrame(onClose: VoidFunction): FrameContainerElement;
