import { ValueObject } from 'src/core/domain/ValueObject';

export class CommentIdVO implements ValueObject<number> {
  private readonly id: number;
  constructor(id: number) {
    this.id = id;
  }

  equals(vo: CommentIdVO): boolean {
    return this.id === vo.id;
  }

  getValue(): number {
    return this.id;
  }
}
