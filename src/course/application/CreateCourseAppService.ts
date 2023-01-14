// import { ApplicationService } from 'src/core/application/ApplicationService';
// import { Result } from 'src/utils/Result';
// import { CourseParameterObject } from '../domain/CourseParameterObject';
// import { createCourseDto } from '../infrastructure/createCourse.dto';
// import { CreateCourse } from './CreateCourse';

// export class CreateCourseApplicationService
//   implements ApplicationService<CourseParameterObject>
// {
//   constructor(private readonly createCourseService: CreateCourse) {
//     this.createCourseService = createCourseService;
//   }
//   async execute<Course>(
//     service: CourseParameterObject,
//   ): Promise<Result<Course>> {
//     return this.createCourseService.createCourse();
//   }

//   async createCourse(
//     courseDto: createCourseDto,
//   ): Promise<CourseParameterObject> {
//     const course = await this.createCourseService.createCourse(courseDto);
//     const courseParameterObject = new CourseParameterObject(
//       course.get().getTitle().getValue(),
//       course.get().getDescription().getValue(),
//       course.get().getId().getValue(),
//     );
//     return courseParameterObject;
//   }
// }
