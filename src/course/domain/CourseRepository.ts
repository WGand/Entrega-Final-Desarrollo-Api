import { Result } from 'src/utils/Result';
import { Course } from './Course';

export interface CourseRepository {
  createCourse(course: Course): Promise<Result<string>>;
  getCourseById(id: string): Promise<Result<Iterable<Course>>>;
  updateCourse(course: Course): Promise<Result<string>>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  getAllCourses(): Promise<Result<Iterable<Course>>>;
}
