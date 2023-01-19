import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { LessonService } from '../application/LessonServices';
import { CreateLessonApplicationService } from '../application/CreateLessonAppService';
import { getCourseByIdApplicationService } from '../application/getCourseByIdAppService';
import { Logger } from '../application/Logger';
import { createLessonDto } from './createLesson.dto';
import { CreateLessonService } from './CreateLesson.service';
import { getCourseByIdService } from './getCourseById.service';
import { Course } from '../domain/Course';
import { getAllLessonsApplicationService } from '../application/GetAllLessonsGivenIDAppService';
import { getAllLessonsService } from './GetAllLessons.Service';
import { LoggerImplementation } from './LoggerImplementation';

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
<<<<<<< Updated upstream
          new LoggerImplementation(),
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

  @Delete(':id')
  async deleteLesson(
    @Param('id') id: string,
    lesson: createLessonDto,
  ): Promise<void> {
    return;
  }
>>>>>>> Stashed changes
}
