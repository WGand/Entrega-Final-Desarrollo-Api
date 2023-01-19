import { ValueObject } from 'src/core/domain/ValueObject';

export class ProfessorNameVO implements ValueObject<string> {
  private readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  isValid(): boolean {
    return this.name.length > 0;
  }

  equals(vo: ProfessorNameVO): boolean {
    return this.name === vo.name;
  }

  getValue(): string {
    return this.name;
  }
}
