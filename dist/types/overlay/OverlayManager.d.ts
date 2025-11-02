export declare class OverlayManager {
    private readonly containerElement;
    private readonly backdropElement;
    private readonly frameElement;
    private readonly frameContent;
    private previousBodyOverflow?;
    constructor();
    openPopup(): void;
    closePopup(): void;
    destroy(): void;
}
