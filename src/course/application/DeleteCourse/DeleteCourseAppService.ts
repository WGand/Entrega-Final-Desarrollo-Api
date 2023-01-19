import { Result } from 'src/utils/Result';
import { ApplicationService } from 'src/core/application/ApplicationService';
import { CourseParameterObject } from '../../domain/CourseParameterObject';
import { DeleteCourse } from './DeleteCourse';
import { CourseIdVO } from '../../domain/value_objects/CourseIdVO';

export class DeleteCourseApplicationService
  implements ApplicationService<CourseParameterObject, string>
{
  id: CourseIdVO;
  constructor(
    private readonly DeleteCourseService: DeleteCourse,
    id: CourseIdVO,
  ) {
    this.DeleteCourseService = DeleteCourseService;
    this.id = id;
  }
  async execute(): Promise<Result<string>> {
    console.log('DENTRO DE EXECUTE');
    this.DeleteCourseService.DeleteCourse(this.id);
    return new Result('Borrado');
  }
}
