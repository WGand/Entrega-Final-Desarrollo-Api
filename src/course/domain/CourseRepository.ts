import { Result } from 'src/utils/Result';
import { Course } from './Course';
import { CourseIdVO } from './value_objects/CourseIdVO';

export interface CourseRepository {
  createCourse(course: Course): Result<Course>;
  getCourseById(id: CourseIdVO): Result<Course>;
  deleteCourseById(id: CourseIdVO): Result<Course>
  getAllCourses(): Result<Iterable<Course>>
}


