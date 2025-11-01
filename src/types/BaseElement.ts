import { Mountable } from "./Mountable";

export class BaseElement extends Mountable {
  constructor({ element }: { element: HTMLElement }) {
    super(element);
  }

  protected onAttached(): void {}
}
