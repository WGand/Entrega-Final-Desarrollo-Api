import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { createCourseDto } from '../infrastructure/createCourse.dto';

export interface CreateCourse {
  createCourse(course: createCourseDto): void;
}
