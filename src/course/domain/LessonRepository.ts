import { Result } from 'src/utils/Result';
import { Lesson } from './Lesson';

export interface LessonRepository {
  createLesson(lesson: Lesson, courseId: number): Promise<Result<string>>;
  getLessons(id: string): Promise<Result<Iterable<Lesson>>>;
 
  // getCourseById(id: CourseIdVO): Result<Course>;
  // deleteCourseById(id: CourseIdVO): Result<Course>;
  // getAllCourses(): Result<Iterable<Course>>;
}
