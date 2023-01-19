import { ValueObject } from 'src/core/domain/ValueObject';

export class VideoIdVO implements ValueObject<number> {
  private readonly id: number;
  constructor(id: number) {
    this.id = id;
  }
  isValid(): boolean {
    return this.id > 0;
  }

  equals(vo: VideoIdVO): boolean {
    return this.id === vo.id;
  }

  getValue(): number {
    return this.id;
  }
}
