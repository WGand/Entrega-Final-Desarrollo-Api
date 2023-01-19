import { LessonIdVO } from 'src/course/domain/value_objects/LessonIdVO';
import { Result } from 'src/utils/Result';
import { Lesson } from '../../domain/Lesson';
import { createLessonDto } from '../../infrastructure/createLesson.dto';

export interface deleteLesson {
  deleteLesson(id: LessonIdVO): Promise<Result<string>>;
}
