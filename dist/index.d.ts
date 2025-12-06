export declare class CozyHome {
    private initialized;
    private clientToken;
    private readonly overlayManager;
    private readonly messageManager;
    private readonly sessionData;
    constructor();
    init: (options: {
        clientToken: string;
    }) => void;
    open: () => void;
    close: () => void;
}
