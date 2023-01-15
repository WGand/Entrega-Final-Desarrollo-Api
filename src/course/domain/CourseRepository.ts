import { Result } from 'src/utils/Result';
import { CoursePayload } from '../application/coursePayload';
import { Course } from './Course';
import { CourseIdVO } from './value_objects/CourseIdVO';

export interface CourseRepository {
  createCourse(course: Course): Promise<Result<Course>>;
  // getCourseById(id: CourseIdVO): Result<Course>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  getAllCourses(): Promise<Result<Iterable<Course>>>;
}
