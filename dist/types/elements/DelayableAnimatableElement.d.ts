import { AnimationDefintion } from "./index";
import { Mountable } from "./Mountable";
export declare class DelayableAnimatableElement extends Mountable {
    private readonly animation;
    constructor({ animationDefinition, element, }: {
        animationDefinition: AnimationDefintion;
        element: HTMLElement;
    });
    protected onAttached(): void;
    animate(): void;
    finish(): void;
}
