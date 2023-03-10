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
  async DeleteCourse(course: createCourseDto): Promise<Result<string>> {
    return await this.applicationService.execute(course);
  }
  async updateCourse(course: createCourseDto): Promise<Result<string>> {
    return await this.applicationService.execute(course);
  }
}
