import { WebObject } from "./WebObject";
export declare class SessionData extends WebObject<SessionData> {
    private hasOpened;
    private sessionId;
    constructor();
    getHasOpened(): boolean;
    setHasOpened(hasOpened: boolean): void;
    getSessionId(): string;
    setSessionId(sessionId: string): void;
}
