import { ApplicationService } from 'src/core/application/ApplicationService';
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
  async createLesson(lesson: createLessonDto): Promise<void> {
    this.applicationService.execute(lesson as unknown as LessonParameterObject);
  }
}