import { OverlayManager } from "./types/OverlayManager";

// src/index.ts
export class CozyHome {
  private clientToken: string | null = null;
  private readonly overlayManager: OverlayManager;

  constructor() {
    this.overlayManager = new OverlayManager();
  }

  public init = (options: { clientToken: string }): void => {
    this.clientToken = options.clientToken;
    console.log("SDK initialized with token:", this.clientToken);
  };

  public open = (): void => {
    console.log("opening");
    this.overlayManager.openPopup();
  };

  public close = (): void => {
    this.overlayManager.closePopup();
  };
}

(window as any).CozyHome = new CozyHome();
