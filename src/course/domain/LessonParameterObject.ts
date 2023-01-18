export class LessonParameterObject {
  id: number;
  title: string;
  description: string;
  CourseId: string
  constructor(id?: number, title?: string, description?: string, CourseId?: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.CourseId = CourseId;

  }
}
