import { ValueObject } from 'src/core/domain/ValueObject';

export class LessonIdVO implements ValueObject<number> {
  private readonly id: number;
  constructor(id: number) {
    this.id = id;
  }

  equals(vo: LessonIdVO): boolean {
    return this.id === vo.id;
  }

  getValue(): number {
    return this.id;
  }
}
