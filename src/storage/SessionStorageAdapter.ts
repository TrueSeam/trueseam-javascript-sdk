import { Serializable } from "../types/Serializable";

export class SessionStorage {
  public static save(key: string, data: Serializable<string>): void {
    sessionStorage.setItem(key, data.serialize());
  }

  public static load<TClass extends Serializable<string>>(
    key: string
  ): TClass | null {
    const res = sessionStorage.getItem(key);
    return res !== null ? JSON.parse(res) : res;
  }

  public static delete(key: string): void {
    sessionStorage.removeItem(key);
  }
}
