import { Mountable } from "../types/Mountable";
export declare function styleElement(el: HTMLElement, style: Partial<CSSStyleDeclaration>): void;
export declare function createContainer(): Mountable;
export declare function createBackdrop(onClick: () => void): Mountable;
export declare function createFrame(): Mountable;
export declare function createFrameContent(): Mountable;
