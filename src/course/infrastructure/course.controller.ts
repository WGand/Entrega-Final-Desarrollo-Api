import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from '../application/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourseAppService';
import { getAllCoursesApplicationService } from '../application/getAllCoursesAppServices';
import { getCourseById } from '../application/getCoursesById';
import { getCoursesByIdApplicationService } from '../application/getCoursesByIdAppService';
import { Logger } from '../application/Logger';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';
import { getAllCoursesService } from './getAllCourses.service';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly createCourseService: CreateCourseService,
    private readonly getAllCoursesServices: getAllCoursesService,
    private readonly getCoursesByIdService: getCourseById
      ) {}
  @Post()
  async createCourse(@Body() course: createCourseDto): Promise<void> {
    const appService = new CourseService(
      new Logger(new CreateCourseApplicationService(this.createCourseService)),
    );
    return appService.createCourse(course);
  }

  @Get()
  async GetAllCourses(
    @Body() course: createCourseDto,
  ): Promise<Iterable<Course>> {
    return (
      await new getAllCoursesApplicationService(
        this.getAllCoursesServices,
      ).execute()
    ).get();
  }
  
  @Get()
  async getCourseById(
    @Body() id: string,
  ): Promise<Iterable<Course>> {
    return (
      await new getCoursesByIdApplicationService(
        this.getCoursesByIdService,
      ).execute(id)
    ).get();
  }
 
}
