import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CourseService } from '../application/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourseAppService';
import { getAllCoursesApplicationService } from '../application/getAllCoursesAppServices';
import { Logger } from '../application/Logger';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';
import { getAllCoursesService } from './getAllCourses.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseService: CreateCourseService,
    private readonly getAllCoursesServices: getAllCoursesService) {}
  @Post()
  async createCourse(@Body() course: createCourseDto): Promise<void> {
    const appService = new CourseService(
      new Logger(new CreateCourseApplicationService(this.createCourseService)),
    );
    return appService.createCourse(course);
  }

  @Get()
  async GetAllCourses(@Body() course: createCourseDto): Promise<Iterable<Course>> {
    return (await new getAllCoursesApplicationService(this.getAllCoursesServices).execute()).get();

  }
}
