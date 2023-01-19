import { ApplicationService } from 'src/core/application/ApplicationService';
import { LessonIdVO } from 'src/course/domain/value_objects/LessonIdVO';
import { Result } from 'src/utils/Result';
import { LessonParameterObject } from '../../domain/LessonParameterObject';
import { deleteLesson } from './deleteLesson';

export class  deleteLessonApplicationService
  implements ApplicationService<LessonParameterObject, string>
{
  id: LessonIdVO;
  constructor(
    private readonly deleteLessonService: deleteLesson,
    id: LessonIdVO
    ) {
    this.deleteLessonService = deleteLessonService;
    this.id = id;
  }
  async execute(): Promise<Result<string>> {
    console.log('BORRADO DE LECCION');
    this.deleteLessonService.deleteLesson(this.id);
    return new Result('Borrada la leccion');
  }
}
