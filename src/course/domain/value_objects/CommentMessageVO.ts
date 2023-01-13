import { ValueObject } from 'src/core/domain/ValueObject';

export class CommentMessageVO implements ValueObject<string> {
  private readonly message: string;
  constructor(message: string) {
    this.message = message;
  }

  equals(vo: CommentMessageVO): boolean {
    return this.message === vo.message;
  }

  getValue(): string {
    return this.message;
  }
}
