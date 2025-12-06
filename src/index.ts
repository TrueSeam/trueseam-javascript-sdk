import { MessageManager } from "./message/MessageManager";
import { OverlayManager } from "./overlay/OverlayManager";
import { SessionData } from "./types/storage/SessionData";

// src/index.ts

export class CozyHome {
  private initialized: boolean = false;
  private clientToken: string | null = null;
  private readonly overlayManager: OverlayManager;
  private readonly messageManager: MessageManager;
  private readonly sessionData: SessionData;

  constructor() {
    this.overlayManager = new OverlayManager();
    this.messageManager = MessageManager.getInstance();
    this.sessionData = new SessionData();
  }

  public init = (options: { clientToken: string }): void => {
    this.clientToken = options.clientToken;
    this.messageManager.setSessionId(this.sessionData.getSessionId());
    this.initialized = true;
  };

  public open = (): void => {
    if (this.initialized) {
      const hasOpened = this.sessionData.getHasOpened();
      this.overlayManager.openPopup({
        shouldAnimate: !hasOpened,
      });
      this.sessionData.setHasOpened(true);
    } else {
      console.error("init must be called before open");
    }
  };

  public close = (): void => {
    if (this.initialized) {
      this.overlayManager.closePopup();
    } else {
      console.error("init must be called before close");
    }
  };
}

(window as any).CozyHome = new CozyHome();
