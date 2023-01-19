import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { LessonService } from '../application/LessonServices';
import { CreateLessonApplicationService } from '../application/CreateLesson/CreateLessonAppService';
import { Logger } from '../application/Logger';
import { createLessonDto } from './createLesson.dto';
import { CreateLessonService } from './LessonServices/CreateLesson.service';
import { getCourseByIdService } from './CourseServices/getCourseById.service';
import { getAllLessonsApplicationService } from '../application/GetLesson/GetAllLessonsGivenIDAppService';
import { getAllLessonsService } from './LessonServices/GetAllLessons.Service';
import { LoggerImplementation } from './LoggerImplementation';
import { Lesson } from '../domain/Lesson';

@Controller('lesson')
export class LessonController {
  constructor(
    private readonly createLessonService: CreateLessonService,
    private readonly getAllLessonsServices: getAllLessonsService,
    private readonly getCourseByIdService: getCourseByIdService,
  ) {}
  @Post()
  async createLesson(@Body() lesson: createLessonDto): Promise<void> {
    if (this.getCourseByIdService.getCourseById(lesson.CourseId) != undefined) {
      const appService = new LessonService(
        new Logger(
          new CreateLessonApplicationService(this.createLessonService),
          new LoggerImplementation(),
        ),
      );
      return appService.createLesson(lesson);
    }
    return;
  }
  @Get(':id')
  async getLessons(@Param('id') id: string): Promise<Iterable<Lesson>> {
    return (
      await new getAllLessonsApplicationService(
        this.getAllLessonsServices,
      ).execute(parseInt(id))
    ).get();
  }
}
