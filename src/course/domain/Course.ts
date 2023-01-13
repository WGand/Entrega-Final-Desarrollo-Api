import { CourseDescriptionVO } from './value_objects/CourseDescriptionVO';
import { CourseIdVO } from './value_objects/CourseIdVO';
import { CourseStateEnum } from './CourseStateEnum';
import { CourseTitleVO } from './value_objects/CourseTitleVO';
import { Lesson } from './Lesson';

export class Course {
  private id: CourseIdVO;
  private title: CourseTitleVO;
  private description: CourseDescriptionVO;
  private state: CourseStateEnum;
  private lesson: Lesson[];
  constructor(
    id: CourseIdVO,
    title: CourseTitleVO,
    description: CourseDescriptionVO,
    state: CourseStateEnum,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
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
}
