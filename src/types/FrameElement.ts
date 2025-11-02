import { Mountable } from "./Mountable";

const EXTERNAL_URL = "http://localhost:3000";

export class FrameElement extends Mountable<HTMLIFrameElement> {
  private readonly handleMessage: (event: MessageEvent) => void;

  constructor({ element }: { element: HTMLIFrameElement }) {
    super(element);
    this.handleMessage = this.onMessage.bind(this);
    window.addEventListener("message", this.handleMessage);
  }

  private onMessage(event: MessageEvent): void {
    if (event.origin !== EXTERNAL_URL) return;

    console.log("parent got event", event.data);
  }

  private onLoaded(): void {
    this.element.contentWindow?.postMessage(
      {
        type: "SETUP",
      },
      "*"
    );
  }

  protected onAttached(): void {
    this.element.onload = this.onLoaded.bind(this);
  }

  public destroy(): void {
    window.removeEventListener("message", this.handleMessage);
  }
}
