import { ApplicationService } from 'src/core/application/ApplicationService';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { getCourseByIdDto } from '../infrastructure/getCourseById.dto';

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
  async  getCourseById(course: getCourseByIdDto): Promise<void> {
    console.log(
      await this.applicationService.execute(
        course as unknown as CourseParameterObject,
      ),
    );
  }
}
