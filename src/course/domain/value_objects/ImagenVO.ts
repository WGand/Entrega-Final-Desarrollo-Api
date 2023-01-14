import { ValueObject } from 'src/core/domain/ValueObject';

export class ImagenVO implements ValueObject<string> {
  private readonly link: string;
  constructor(link: string) {
    this.link = link;
  }

  equals(vo: ImagenVO): boolean {
    return this.link === vo.link;
  }

  getValue(): string {
    return this.link;
  }
}
