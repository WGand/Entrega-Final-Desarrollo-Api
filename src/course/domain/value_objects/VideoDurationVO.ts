import { ValueObject } from 'src/core/domain/ValueObject';

export class VideoDurationVO implements ValueObject<number> {
  private readonly duration: number;
  constructor(duration: number) {
    this.duration = duration;
  }

  equals(vo: VideoDurationVO): boolean {
    return this.duration === vo.duration;
  }

  getValue(): number {
    return this.duration;
  }
}
