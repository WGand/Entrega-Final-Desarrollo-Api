import { ApplicationService } from 'src/core/application/ApplicationService';
import { CourseParameterObject } from 'src/course/domain/CourseParameterObject';
import { createCourseDto } from 'src/course/infrastructure/createCourse.dto';
import { Result } from 'src/utils/Result';
import { UpdateCourse } from './UpdateCourse';

export class UpdateCourseAppService
  implements ApplicationService<CourseParameterObject, string>
{
  constructor(private readonly updateCourseService: UpdateCourse) {
    this.updateCourseService = updateCourseService;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    const algo = await this.updateCourseService.updateCourse(
      service as unknown as createCourseDto,
    );
    return new Result(algo.get() + ' curso publicado');
  }
}
