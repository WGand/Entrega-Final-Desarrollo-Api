import { Result } from 'src/utils/Result';
import { Lesson } from '../domain/Lesson';

export interface getAllLessons {
  getAllLesson(id: number): Promise<Result<Iterable<Lesson>>>;
}
