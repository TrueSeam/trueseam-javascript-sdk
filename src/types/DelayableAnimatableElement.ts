import { Mountable } from "./Mountable";

type AnimationDefintion = {
  keyFrames: Array<Keyframe>;
  options?: KeyframeEffectOptions;
};

export class DelayableAnimatableElement extends Mountable {
  private readonly animation: Animation;

  constructor({
    animationDefinition,
    element,
  }: {
    animationDefinition: AnimationDefintion;
    element: HTMLElement;
  }) {
    super(element);
    const { keyFrames, options = { duration: 1000 } } = animationDefinition;
    const keyFrameEffect = new KeyframeEffect(this.element, keyFrames, options);
    this.animation = new Animation(keyFrameEffect);
  }

  public onAttached(): void {
    this.animate();
  }

  public animate(): void {
    console.log("animating");
    this.animation.play();
  }
}
