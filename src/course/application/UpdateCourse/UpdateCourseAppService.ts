import { ApplicationService } from 'src/core/application/ApplicationService';
import { CourseParameterObject } from 'src/course/domain/CourseParameterObject';
import { Result } from 'src/utils/Result';

export class UpdateCourseAppService
  implements ApplicationService<CourseParameterObject, string>
{
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    return new Result(service.title + ' curso publicado');
  }
}
