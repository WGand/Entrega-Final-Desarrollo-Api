import { ValueObject } from 'src/core/domain/ValueObject';

export class CourseIdVO implements ValueObject<number> {
  private readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
  isValid(): boolean {
    return this.id > 0;
  }

  equals(vo: CourseIdVO): boolean {
    return this.id === vo.id;
  }

  getValue(): number {
    return this.id;
  }
}
