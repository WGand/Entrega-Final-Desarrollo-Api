import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { LessonParameterObject } from '../domain/LessonParameterObject';
import { createLessonDto } from '../infrastructure/createLesson.dto';
import { CreateLesson } from './CreateLesson';

export class CreateLessonApplicationService
  implements ApplicationService<LessonParameterObject, string>
{
  constructor(private readonly createLessonService: CreateLesson) {
    this.createLessonService = createLessonService;
  }
  async execute(service: LessonParameterObject): Promise<Result<string>> {
    console.log('CreateLessonAppService');
    const lesson = this.createLessonService.createLesson(
      service as unknown as createLessonDto,
    );
    return new Result((await lesson).get().getDescription().getValue());
  }
}
