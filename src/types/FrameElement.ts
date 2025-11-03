import { Mountable } from "./Mountable";

const EXTERNAL_URL = "http://localhost:3000";

export class FrameElement extends Mountable<HTMLIFrameElement> {
  private readonly handleMessage: (event: MessageEvent) => void;
  private readonly handleClosePopup: () => void;

  constructor({
    element,
    onClose,
  }: {
    element: HTMLIFrameElement;
    onClose: () => void;
  }) {
    super(element);
    this.handleClosePopup = onClose;
    this.handleMessage = this.onMessage.bind(this);
    window.addEventListener("message", this.handleMessage);
  }

  private onMessage(event: MessageEvent): void {
    if (event.origin !== EXTERNAL_URL) return;

    if (event.data.type === "CLOSE") {
      this.handleClosePopup();
    }
  }

  private onLoaded(): void {
    this.element.contentWindow?.postMessage(
      {
        type: "SETUP",
      },
      EXTERNAL_URL
    );
  }

  protected onAttached(): void {
    this.element.onload = this.onLoaded.bind(this);
  }

  public destroy(): void {
    window.removeEventListener("message", this.handleMessage);
  }
}
