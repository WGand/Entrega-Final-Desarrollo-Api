import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { CreateLesson } from './CreateLesson';
import { createLessonDto } from 'src/course/infrastructure/createLesson.dto';
import { LessonParameterObject } from 'src/course/domain/LessonParameterObject';


export class CreateLessonApplicationService
  implements ApplicationService<LessonParameterObject, string>
{
  constructor(private readonly createLessonService: CreateLesson) {
    this.createLessonService = createLessonService;
  }
  async execute(service: LessonParameterObject): Promise<Result<string>> {
    console.log('CreateLessonAppService')
    this.createLessonService.createLesson(service as unknown as createLessonDto,)
    return new Result(service.title + 'Leccion creada')
  }
}
