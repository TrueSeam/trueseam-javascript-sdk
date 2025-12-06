import { Serializable } from "../types/Serializable";
export declare class SessionStorage {
    static save(key: string, data: Serializable<string>): void;
    static load<TClass extends Serializable<string>>(key: string): TClass | null;
    static delete(key: string): void;
}
