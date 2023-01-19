import { ApplicationService } from 'src/core/application/ApplicationService';
import { createCourseDto } from 'src/course/infrastructure/createCourse.dto';
import { Result } from 'src/utils/Result';
import { CourseParameterObject } from '../../domain/CourseParameterObject';
import { CreateCourse } from './CreateCourse';

export class CreateCourseApplicationService
  implements ApplicationService<CourseParameterObject, string>
{
  constructor(private readonly createCourseService: CreateCourse) {
    this.createCourseService = createCourseService;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    this.createCourseService.createCourse(
      service as unknown as createCourseDto,
    );
    return new Result(service.title + ' curso creado');
  }
}
