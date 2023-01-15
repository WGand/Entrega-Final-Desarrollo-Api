import { parse } from 'path';
import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { CreateCourse } from './CreateCourse';
import { getAllCourses } from './GetAllCourses';

export class getAllCoursesApplicationService
{
  
  constructor(private readonly getAllCoursesService: getAllCourses) {
    this.getAllCoursesService = getAllCoursesService;
  }
  async execute(service: CourseParameterObject): Promise<Result<Iterable<Course>>> {
    const course = await this.getAllCoursesService.getAllCourses();
    return (course);
  }
}
