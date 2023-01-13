import { ValueObject } from 'src/core/domain/ValueObject';

export class ContentTitleVO implements ValueObject<string> {
  private readonly content: string;
  constructor(content: string) {
    this.content = content;
  }

  equals(vo: ContentTitleVO): boolean {
    return this.content === vo.content;
  }

  getValue(): string {
    return this.content;
  }
}
