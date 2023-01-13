import { Result } from 'src/utils/Result';
import { Course } from './Course';

export interface CourseRepository {
  createCourse(course: Course): Result<Course>;
}
