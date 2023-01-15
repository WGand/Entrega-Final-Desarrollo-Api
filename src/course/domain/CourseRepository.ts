import { Result } from 'src/utils/Result';
import { Course } from './Course';

export interface CourseRepository {
  createCourse(course: Course): Promise<Result<Course>>;
  
  // getCourseById(id: CourseIdVO): Result<Course>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  // getAllCourses(): Result<Iterable<Course>>;
}
