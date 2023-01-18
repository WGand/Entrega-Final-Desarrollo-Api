import { ApplicationService } from 'src/core/application/ApplicationService';
import { Lesson } from '../domain/Lesson';
import { LessonParameterObject } from '../domain/LessonParameterObject';
import { createLessonDto } from '../infrastructure/createLesson.dto';

export class LessonService {
  constructor(
    private readonly applicationService: ApplicationService<
      LessonParameterObject,
      string
    >,
  ) {
    this.applicationService = applicationService;
  }
  async createLesson(course: createLessonDto): Promise<void> {
    this.applicationService.execute(Lesson as unknown as LessonParameterObject);
  }
}
