import { ValueObject } from 'src/core/domain/ValueObject';

export class LessonTitleVO implements ValueObject<string> {
  private readonly title: string;
  constructor(title: string) {
    this.title = title;
  }
  isValid(): boolean {
    return this.title.length > 0;
  }

  equals(vo: LessonTitleVO): boolean {
    return this.title === vo.title;
  }

  getValue(): string {
    return this.title;
  }
}
