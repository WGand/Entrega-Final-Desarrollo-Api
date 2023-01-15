import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { CreateCourse } from './CreateCourse';

export class CreateCourseApplicationService
  implements ApplicationService<CourseParameterObject, string>
{
  constructor(private readonly createCourseService: CreateCourse) {
    this.createCourseService = createCourseService;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    const course = this.createCourseService.createCourse(
      service as unknown as createCourseDto,
    );
    return new Result((await course).get().getDescription().getValue());
  }
}
