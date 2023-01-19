import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { CourseParameterObject } from '../../domain/CourseParameterObject';
import { createCourseDto } from '../../infrastructure/createCourse.dto';

export class CourseService {
  constructor(
    private readonly applicationService: ApplicationService<
      CourseParameterObject,
      string
    >,
  ) {
    this.applicationService = applicationService;
  }
  async createCourse(course: createCourseDto): Promise<Result<string>> {
    return await this.applicationService.execute(course);
  }
}
