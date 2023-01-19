import { ValueObject } from 'src/core/domain/ValueObject';

export class ContentTitleVO implements ValueObject<string> {
  private readonly content: string;
  constructor(content: string) {
    this.content = content;
  }
  isValid(): boolean {
    return this.content.length > 0 && this.content.match(/\+/g) === null;
  }

  equals(vo: ContentTitleVO): boolean {
    return this.content === vo.content;
  }

  getValue(): string {
    return this.content;
  }
}
