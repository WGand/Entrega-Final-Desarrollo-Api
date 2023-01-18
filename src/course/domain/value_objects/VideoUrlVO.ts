import { ValueObject } from 'src/core/domain/ValueObject';

export class VideoUrlVO implements ValueObject<string> {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  isValid(): boolean {
    return this.url.length > 0;
  }

  equals(vo: VideoUrlVO): boolean {
    return this.url === vo.url;
  }

  getValue(): string {
    return this.url;
  }
}
