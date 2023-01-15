import { Result } from 'src/utils/Result';
import { CoursePayload } from '../application/coursePayload';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { Course } from './Course';
import { CourseStateEnum } from './CourseStateEnum';
import { CourseDescriptionVO } from './value_objects/CourseDescriptionVO';
import { CourseIdVO } from './value_objects/CourseIdVO';
import { CourseTitleVO } from './value_objects/CourseTitleVO';
import { ImagenVO } from './value_objects/ImagenVO';
import { ProfessorNameVO } from './value_objects/ProfessorNameVO';

export class CourseFactory {
  createCourse(course: createCourseDto): Result<Course> {
    const courseCreated = new Course(
      new CourseTitleVO(course.title),
      new CourseDescriptionVO(course.description),
      CourseStateEnum[course.state],
      new ImagenVO(course.imagen),
      new ProfessorNameVO('Erstwhile'),
    );
    return new Result<Course>(courseCreated);
  }
}
