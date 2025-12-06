import { SessionStorage } from "../../storage/SessionStorageAdapter";
import { Serializable } from "../Serializable";

export abstract class WebObject<TClass extends WebObject<TClass>>
  implements Serializable<string>
{
  private key: string;

  constructor(key: string) {
    Object.defineProperty(this, "key", {
      enumerable: false,
      writable: true,
      configurable: true,
    }); // hide the key from serialization
    this.key = key;
  }

  public load(): TClass | null {
    return SessionStorage.load(this.key);
  }

  public save(): void {
    SessionStorage.save(this.key, this);
  }

  public delete(): void {
    SessionStorage.delete(this.key);
  }

  public serialize(): string {
    return JSON.stringify(this);
  }
}
