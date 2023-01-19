import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { CourseService } from '../application/CreateCourse/CourseServices';
import { CreateCourseApplicationService } from '../application/CreateCourse/CreateCourseAppService';
import { getAllCoursesApplicationService } from '../application/GetCourse/getAllCoursesAppServices';
import { getCourseByIdApplicationService } from '../application/GetCourse/getCourseByIdAppService';
import { Logger } from '../application/Logger';
import { Course } from '../domain/Course';
import { createCourseDto } from './createCourse.dto';
import { CreateCourseService } from './CourseServices/CreateCourse.service';
import { getAllCoursesService } from './CourseServices/getAllCourses.service';
import { getCourseByIdService } from './CourseServices/getCourseById.service';
import { LoggerImplementation } from './LoggerImplementation';
import { CourseIdVO } from '../domain/value_objects/CourseIdVO';
import { Result } from 'src/utils/Result';
import { DeleteCourseService } from './CourseServices/DeleteCourse.service';
import { DeleteCourseApplicationService } from '../application/DeleteCourse/DeleteCourseAppService';
import { UpdateCourseService } from './CourseServices/UpdateCourse.service';
import { UpdateCourseAppService } from '../application/UpdateCourse/UpdateCourseAppService';

@Controller('courses')
export class CourseController {
  constructor(
    private readonly createCourseService: CreateCourseService,
    private readonly getAllCoursesServices: getAllCoursesService,
    private readonly getCourseByIdService: getCourseByIdService,
    private readonly DeleteCourseService: DeleteCourseService,
    private readonly updateCourseService: UpdateCourseService,
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

  @Put(':id')
  async updateCourseById(@Param('id') id: string): Promise<Result<string>> {
    const appService = new CourseService(
      new Logger(
        new UpdateCourseAppService(this.updateCourseService),
        new LoggerImplementation(),
      ),
    );
    return await appService.updateCourse(id as unknown as createCourseDto);
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

  @Delete(':id')
  async DeleteCourseById(
    @Param('id') id: string,
    @Body() course: createCourseDto,
  ): Promise<Result<string>> {
    const appService = new CourseService(
      new Logger(
        new DeleteCourseApplicationService(
          this.DeleteCourseService,
          new CourseIdVO(parseInt(id)),
        ),
        new LoggerImplementation(),
      ),
    );
    return await appService.DeleteCourse(course);
  }
}
