import { ValueObject } from 'src/core/domain/ValueObject';

export class VideoUrlVO implements ValueObject<string> {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }

  equals(vo: VideoUrlVO): boolean {
    return this.url === vo.url;
  }

  getValue(): string {
    return this.url;
  }
}
