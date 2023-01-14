import { Body, Controller, Post } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseService: CreateCourseService) {}
  @Post()
  createCourse(@Body() course: createCourseDto): Promise<Result<Course>> {
    return this.createCourseService.createCourse(course);
  }
}
