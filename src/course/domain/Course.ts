import { CourseDescriptionVO } from './value_objects/CourseDescriptionVO';
import { CourseIdVO } from './value_objects/CourseIdVO';
import { CourseStateEnum } from './CourseStateEnum';
import { CourseTitleVO } from './value_objects/CourseTitleVO';
import { Lesson } from './Lesson';
import { ImagenVO } from './value_objects/ImagenVO';

export class Course {
  private id?: CourseIdVO;
  private title: CourseTitleVO;
  private description: CourseDescriptionVO;
  private state: CourseStateEnum;
  private imagen: ImagenVO;
  private lesson: Lesson[];
  constructor(
    title: CourseTitleVO,
    description: CourseDescriptionVO,
    state: CourseStateEnum,
    imagen: ImagenVO,
    id?: CourseIdVO,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.state = state;
    this.imagen = imagen;
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

  addLesson(lesson: Lesson): void{
    
    this.lesson.push(lesson); 
    
  }
  
}
