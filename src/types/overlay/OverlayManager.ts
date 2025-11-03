import { Mountable } from "../Mountable";
import {
  createBackdrop,
  createContainer,
  createFrame,
  createFrameContent,
} from "../../utils/dom";
import { FrameElement } from "../FrameElement";

export class OverlayManager {
  private readonly containerElement: Mountable;
  private readonly backdropElement: Mountable;
  private readonly frameElement: Mountable;
  private readonly frameContent: FrameElement;

  private previousBodyOverflow?: string;

  constructor() {
    this.containerElement = createContainer();
    this.backdropElement = createBackdrop(this.closePopup.bind(this));
    this.frameElement = createFrame();
    this.frameContent = createFrameContent(this.closePopup.bind(this));
    this.frameContent.attachTo(this.frameElement);
  }

  public openPopup(): void {
    this.containerElement.attachTo(document.body);
    this.backdropElement.attachTo(this.containerElement);
    this.frameElement.attachTo(this.containerElement);

    const body = document.body;
    this.previousBodyOverflow = body.style.overflow;
    body.style.overflow = "hidden";
  }

  public closePopup(): void {
    this.frameElement.detach();
    this.backdropElement.detach();
    this.containerElement.detach();

    if (this.previousBodyOverflow !== undefined) {
      document.body.style.overflow = this.previousBodyOverflow;
      this.previousBodyOverflow = undefined;
    } else {
      document.body.style.overflow = "";
    }
  }

  public destroy(): void {
    this.frameElement.destroy();
    this.backdropElement.destroy();
    this.containerElement.destroy();
  }
}
