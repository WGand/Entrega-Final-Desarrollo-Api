import { Body, Controller, Get, Post } from '@nestjs/common';
import { CourseService } from '../application/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourseAppService';
import { getCourseByIdApplicationService } from '../application/getCourseByIdAppService';
import { Logger } from '../application/Logger';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CreateCourse.service';
import { getCourseByIdDto } from './getCourseById.dto';
import { getCourseByIdService } from './getCourseById.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly createCourseService: CreateCourseService,
              private readonly getCourseByIdService:getCourseByIdService) {}

  @Post()
  async createCourse(@Body() course: createCourseDto): Promise<void> {
    const appService = new CourseService(
      new Logger(new CreateCourseApplicationService(this.createCourseService)),
    );
    return appService.createCourse(course);
  }

  @Get()
  async getCourseById(@Body() courseById: getCourseByIdDto): Promise<void> {
    const appService = new CourseService(
      new Logger(new getCourseByIdApplicationService(this.getCourseByIdService)),
    );
    return appService.getCourseById(courseById);
  }
  
}
