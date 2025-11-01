import { Mountable } from "./Mountable";
type AnimationDefintion = {
    keyFrames: Array<Keyframe>;
    options?: KeyframeEffectOptions;
};
export declare class DelayableAnimatableElement extends Mountable {
    private readonly animation;
    constructor({ animationDefinition, element, }: {
        animationDefinition: AnimationDefintion;
        element: HTMLElement;
    });
    onAttached(): void;
    animate(): void;
}
export {};
