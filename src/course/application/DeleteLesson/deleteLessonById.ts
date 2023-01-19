import { Result } from 'src/utils/Result';
import { Lesson } from '../../domain/Lesson';
import { createLessonDto } from '../../infrastructure/createLesson.dto';

export interface deleteLessonById {
  deleteLessonById(id: string): Promise<void>;
}
