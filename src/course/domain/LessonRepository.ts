import { Result } from 'src/utils/Result';
import { Lesson } from './Lesson';

export interface LessonRepository {
  createLesson(lesson: Lesson): Promise<Result<Lesson>>;

  // getLessonById(id: CourseIdVO): Result<Course>;
  // deleteLessonById(id: CourseIdVO): Result<Course>;
  // getLessonCourses(): Result<Iterable<Course>>;
}
