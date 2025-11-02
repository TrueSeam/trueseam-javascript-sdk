export declare class CozyHome {
    private clientToken;
    private readonly overlayManager;
    constructor();
    init: (options: {
        clientToken: string;
    }) => void;
    open: () => void;
    close: () => void;
}
