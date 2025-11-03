import { AnimationDefintion } from "./index";
import { Mountable } from "./Mountable";

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
    const resolvedOptions: KeyframeEffectOptions = {
      ...animationDefinition.options,
      duration: animationDefinition.options?.duration ?? 1000,
    };
    const keyFrameEffect = new KeyframeEffect(
      this.element,
      animationDefinition.keyFrames,
      resolvedOptions
    );
    this.animation = new Animation(keyFrameEffect);
  }

  protected onAttached(): void {
    this.animate();
  }

  public animate(): void {
    this.animation.play();
  }

  public finish(): void {
    this.animation.cancel();
  }
}
