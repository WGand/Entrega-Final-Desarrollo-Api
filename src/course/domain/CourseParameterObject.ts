export class CourseParameterObject {
  title?: string;
  description?: string;
  id?: number;
  constructor(title?: string, description?: string, id?: number) {
    this.title = title;
    this.description = description;
    this.id = id;
  }
}
