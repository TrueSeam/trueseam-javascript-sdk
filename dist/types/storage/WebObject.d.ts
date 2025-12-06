import { Serializable } from "../Serializable";
export declare abstract class WebObject<TClass extends WebObject<TClass>> implements Serializable<string> {
    private key;
    constructor(key: string);
    load(): TClass | null;
    save(): void;
    delete(): void;
    serialize(): string;
}
