import { uuidv4 } from "../../utils/uuid";
import { WebObject } from "./WebObject";

const key = "trueseam.session-data";

export class SessionData extends WebObject<SessionData> {
  private hasOpened: boolean;
  private sessionId: string;

  constructor() {
    super(key);
    const persisted = this.load();
    this.hasOpened = persisted?.hasOpened ?? false;
    this.sessionId = persisted?.sessionId ?? uuidv4();
  }

  public getHasOpened(): boolean {
    return this.hasOpened;
  }

  public setHasOpened(hasOpened: boolean): void {
    this.hasOpened = hasOpened;
    this.save();
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public setSessionId(sessionId: string): void {
    this.sessionId = sessionId;
    this.save();
  }
}
