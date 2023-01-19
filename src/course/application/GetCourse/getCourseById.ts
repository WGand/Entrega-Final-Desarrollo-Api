/* eslint-disable prettier/prettier */
import { Result } from 'src/utils/Result';
import { Course } from '../../domain/Course';
import { createCourseDto } from '../../infrastructure/createCourse.dto';

export interface getCourseById {
  getCourseById(id: string): Promise<Result<Iterable<Course>>>;
}
