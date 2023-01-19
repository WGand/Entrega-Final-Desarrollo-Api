import { ApplicationService } from 'src/core/application/ApplicationService';
import { LessonParameterObject } from '../domain/LessonParameterObject';
import { createLessonDto } from '../infrastructure/createLesson.dto';
import { Result } from 'src/utils/Result';

export class LessonService {
  constructor(
    private readonly applicationService: ApplicationService<
      LessonParameterObject, 
      string
    >,
  ) {
    this.applicationService = applicationService;
  }
  async createLesson(lesson: createLessonDto): Promise<Result<string>> {
    console.log('LessonService');
    return await this.applicationService.execute(lesson);
  }
}