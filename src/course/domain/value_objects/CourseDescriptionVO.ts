import { ValueObject } from 'src/core/domain/ValueObject';

export class CourseDescriptionVO implements ValueObject<string> {
  private readonly description: string;
  constructor(description: string) {
    this.description = description;
  }
  isValid(): boolean {
    return this.description.length > 0;
  }

  equals(vo: CourseDescriptionVO): boolean {
    return this.description === vo.description;
  }

  getValue(): string {
    return this.description;
  }
}
