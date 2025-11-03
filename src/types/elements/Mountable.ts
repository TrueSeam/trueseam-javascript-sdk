type Listener = {
  type: string;
  listener: EventListenerOrEventListenerObject;
  options?: boolean | AddEventListenerOptions;
};

export abstract class Mountable<TElement extends HTMLElement = HTMLElement> {
  private readonly listeners: Array<Listener> = [];

  constructor(protected readonly element: TElement) {}

  protected abstract onAttached(): void;

  public addEventListener<K extends keyof HTMLElementEventMap>(
    type: K,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) {
    this.element.addEventListener(type, listener, options);
    this.listeners.push({
      type,
      listener,
      options,
    });
  }

  /**
   * Attaches the element to a parent element
   * @param parent The parent element
   */
  public attachTo(parent: Mountable | TElement): void {
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

  /**
   * Detaches the current element and performs cleanup
   */
  public destroy(): void {
    this.detach();
    while (this.listeners.length > 0) {
      const { type, listener, options } = this.listeners.pop()!;
      this.element.removeEventListener(type, listener, options);
    }
  }

  /**
   * Applies styles to the element
   * @param style A style object
   */
  public style(style: Partial<CSSStyleDeclaration>): void {
    Object.assign(this.element.style, style);
  }
}
