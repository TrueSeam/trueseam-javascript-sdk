import { Mountable } from "./Mountable";

export class BaseElement<
  TElement extends HTMLElement
> extends Mountable<TElement> {
  constructor({ element }: { element: TElement }) {
    super(element);
  }

  protected onAttached(): void {}
}
