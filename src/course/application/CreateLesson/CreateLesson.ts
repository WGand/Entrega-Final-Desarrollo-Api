import { createLessonDto } from 'src/course/infrastructure/createLesson.dto';
import { Result } from 'src/utils/Result';


export interface CreateLesson {
  createLesson(lesson: createLessonDto): Promise<Result<string>>;
}
