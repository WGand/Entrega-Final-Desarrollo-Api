import { Body, Controller, Post } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CourseService } from '../application/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourseAppService';
import { Logger } from '../application/Logger';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseService: CreateCourseService) {}
  @Post()
  createCourse(@Body() course: createCourseDto): Promise<void> {
    const appService = new CourseService(
      new Logger(new CreateCourseApplicationService(this.createCourseService)),
    );
    return appService.createCourse(course);
  }
}
