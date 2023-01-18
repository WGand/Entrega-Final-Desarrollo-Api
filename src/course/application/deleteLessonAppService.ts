import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { LessonParameterObject } from '../domain/LessonParameterObject';
import { createLessonDto } from '../infrastructure/createLesson.dto';
import { deleteLessonById } from './deleteLessonById';

export class CreateLessonApplicationService
  implements ApplicationService<LessonParameterObject, void>
{
  constructor(private readonly createLessonService: deleteLessonById) {
    this.createLessonService = createLessonService;
  }
  async execute(service: LessonParameterObject): Promise<Result<void>> {
    console.log('CreateLessonAppService')
    const lesson = this.createLessonService.deleteLessonById(
      service as unknown as string,
    );

    return;
  }
}