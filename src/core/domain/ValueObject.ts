export interface ValueObject<T> {
  equals(vo: this): boolean;
  getValue(): T;
  isValid(): boolean;
}
