import { Result } from 'src/utils/Result';
import { Lesson } from '../domain/Lesson';
import { createLessonDto } from '../infrastructure/createLesson.dto';

export interface CreateLesson {
  createLesson(lesson: createLessonDto): Promise<Result<Lesson>>;
}
