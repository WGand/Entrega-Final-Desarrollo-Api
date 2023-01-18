import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LessonService } from '../application/LessonServices';
import { CreateLessonApplicationService } from '../application/CreateLessonAppService';
//import { getAllCoursesApplicationService } from '../application/getAllCoursesAppServices';
import { getCourseByIdApplicationService } from '../application/getCourseByIdAppService';
import { Logger } from '../application/Logger';
import { Lesson } from '../domain/Lesson';
import { createLessonDto } from './createLesson.dto';
import { CreateLessonService } from './CreateLesson.service';

//import { getAllCoursesService } from './getAllCourses.service';
import { getCourseByIdService } from './getCourseById.service';
import { Course } from '../domain/Course';

@Controller('lesson')
export class LessonController {
  constructor(
    private readonly createLessonService: CreateLessonService,
    //private readonly getAllCoursesServices: getAllCoursesService,
    private readonly getCourseByIdService: getCourseByIdService,
  ) { }
  @Post()
  async createLesson(@Body() lesson: createLessonDto): Promise<void> {
    if (this.getCourseByIdService.getCourseById(lesson.CourseId) != undefined) {
      const appService = new LessonService(
        new Logger(new CreateLessonApplicationService(this.createLessonService)),
      );
      return appService.createLesson(lesson)
    }
    return
  }

  @Get(':id')
  async getCourseById(@Param('id') id: string): Promise<Iterable<Course>> {
    return (
      await new getCourseByIdApplicationService(
        this.getCourseByIdService,
      ).execute(id)
    ).get();
  }

  /*@Get()
  async GetAllCourses(
    @Body() course: createCourseDto,
  ): Promise<Iterable<Course>> {
    return (
      await new getAllCoursesApplicationService(
        this.getAllCoursesServices,
      ).execute()
    ).get();
  }*/

  /*@Get(':id')
  async getCourseById(@Param('id') id: string): Promise<Iterable<Course>> {
    return (
      await new getCourseByIdApplicationService(
        this.getCourseByIdService,
      ).execute(id)
    ).get();
  }*/
}