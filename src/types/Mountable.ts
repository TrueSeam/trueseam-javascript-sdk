export abstract class Mountable {
  constructor(protected readonly element: HTMLElement) {}

  protected abstract onAttached(): void;

  /**
   * Attaches the element to a parent element
   * @param parent The parent element
   */
  public attachTo(parent: Mountable | HTMLElement): void {
    if (parent instanceof Mountable) {
      parent.element.appendChild(this.element);
    } else {
      parent.appendChild(this.element);
    }
    this.onAttached();
  }

  /**
   * Detaches the current element from the tree
   */
  public detach(): void {
    this.element.remove();
  }
}
