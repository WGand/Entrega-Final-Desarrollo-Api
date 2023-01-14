export class Result<T> {
  private result: T;
  private error: Error;
  constructor(result: T) {
    this.result = result;
  }

  isSucess(): boolean {
    return this.result !== undefined;
  }
  get(): T {
    return this.result;
  }

  getError(): Error {
    return this.error;
  }
}
