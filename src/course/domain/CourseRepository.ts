import { Result } from 'src/utils/Result';
import { Course } from './Course';

export interface CourseRepository {
  createCourse(course: Course): Promise<Result<Course>>;
  getCourseById(id: string): Promise<Result<Iterable<Course>>>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  getAllCourses(): Promise<Result<Iterable<Course>>>;
}
