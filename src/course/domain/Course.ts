import { CourseDescriptionVO } from './value_objects/CourseDescriptionVO';
import { CourseIdVO } from './value_objects/CourseIdVO';
import { CourseStateEnum } from './CourseStateEnum';
import { CourseTitleVO } from './value_objects/CourseTitleVO';
import { Lesson } from './Lesson';
import { ImagenVO } from './value_objects/ImagenVO';
import { ProfessorNameVO } from './value_objects/ProfessorNameVO';

export class Course {
  private id?: CourseIdVO;
  private title: CourseTitleVO;
  private description: CourseDescriptionVO;
  private state: CourseStateEnum;
  private imagen: ImagenVO;
  private professorName: ProfessorNameVO;
  private lesson: Lesson[];
  constructor(
    title: CourseTitleVO,
    description: CourseDescriptionVO,
    state: CourseStateEnum,
    imagen: ImagenVO,
    professorName: ProfessorNameVO,
    id?: CourseIdVO,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
    this.imagen = imagen;
    this.professorName = professorName;
  }

  getId(): CourseIdVO {
    return this.id;
  }

  getTitle(): CourseTitleVO {
    return this.title;
  }

  getDescription(): CourseDescriptionVO {
    return this.description;
  }

  getState(): CourseStateEnum {
    return this.state;
  }

  getLessons(): Lesson[] {
    return this.lesson;
  }

  getImage(): ImagenVO {
    return this.imagen;
  }

  addLesson(lesson: Lesson): void {
    this.lesson.push(lesson);
  }

  getProfessorName(): ProfessorNameVO {
    return this.professorName;
  }

  isValid(): boolean {
    if (
      this.getDescription().isValid() &&
      this.getTitle().isValid() &&
      this.getImage().isValid() &&
      this.getProfessorName().isValid()
    ) {
      return true;
    }
  }

  setState(state: CourseStateEnum): void {
    this.state = state;
  }
}
