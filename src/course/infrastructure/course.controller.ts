import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { CourseService } from '../application/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourseAppService';
import { getAllCoursesApplicationService } from '../application/getAllCoursesAppServices';
import { getCourseByIdApplicationService } from '../application/getCourseByIdAppService';
import { Logger } from '../application/Logger';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';
import { getAllCoursesService } from './getAllCourses.service';
import { getCourseByIdService } from './getCourseById.service';
import { LoggerImplementation } from './LoggerImplementation';
import { CourseIdVO } from '../domain/value_objects/CourseIdVO';
import { Result } from 'src/utils/Result';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly createCourseService: CreateCourseService,
    private readonly getAllCoursesServices: getAllCoursesService,
    private readonly getCourseByIdService: getCourseByIdService,
  ) {}
  @Post()
  async createCourse(@Body() course: createCourseDto): Promise<Result<string>> {
    const appService = new CourseService(
      new Logger(
        new CreateCourseApplicationService(this.createCourseService),
        new LoggerImplementation(),
      ),
    );
    return await appService.createCourse(course);
  }

  @Get()
  async GetAllCourses(): Promise<Iterable<Course>> {
    return (
      await new getAllCoursesApplicationService(
        this.getAllCoursesServices,
      ).execute()
    ).get();
  }

  @Get(':id')
  async getCourseById(@Param('id') id: string): Promise<Iterable<Course>> {
    return (
      await new getCourseByIdApplicationService(
        this.getCourseByIdService,
      ).execute(id)
    ).get();
  }

  // @Delete(':id')
  // async DeleteCourseById(@Param('id') id: string): Promise<string> {
  //   const appService = new DeleteCourseApplicationService(
  //     this.DeleteCourseService,
  //     new CourseIdVO(parseInt(id)),
  //   ).execute();
  //   return 'Deleted';
  // }
}
