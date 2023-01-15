import { ApplicationService } from 'src/core/application/ApplicationService';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { createCourseDto } from '../infrastructure/createCourse.dto';

export class CourseService {
 
  constructor(
    private readonly applicationService: ApplicationService<
      CourseParameterObject,
      string
    >,
  ) {
    this.applicationService = applicationService;
  }
  async createCourse(course: createCourseDto): Promise<void> {
    console.log(
      await this.applicationService.execute(
        course as unknown as CourseParameterObject,
      ),
    );
  }
 
}
