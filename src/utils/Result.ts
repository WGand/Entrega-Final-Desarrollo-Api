export class Result<T> {
  private result: T;
  private error: Error;

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
