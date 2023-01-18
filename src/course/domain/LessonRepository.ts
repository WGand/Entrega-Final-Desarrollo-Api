import { Result } from 'src/utils/Result';
import { Lesson } from './Lesson';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { Course } from './Course';

export interface LessonRepository {
  createLesson(lesson: Lesson): Promise<Result<Lesson>>;

  // getCourseById(id: CourseIdVO): Result<Course>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  // getAllCourses(): Result<Iterable<Course>>;
}