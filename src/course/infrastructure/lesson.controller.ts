import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { LessonService } from '../application/LessonServices';
import { Logger } from '../application/Logger';
import { createLessonDto } from './createLesson.dto';
import { Course } from '../domain/Course';
import { LoggerImplementation } from './LoggerImplementation';
import { Lesson } from '../domain/Lesson';
import { Result } from 'src/utils/Result';
import { getCourseByIdService } from '../infrastructure/CourseServices/getCourseById.service';
import { CreateLessonService } from './LessonServices/CreateLesson.service';
import { getAllLessonsService } from './LessonServices/GetAllLessons.Service';
import { CreateLessonApplicationService } from '../application/CreateLesson/CreateLessonAppService';
import { getAllLessonsApplicationService } from '../application/GetLesson/GetAllLessonsGivenIDAppService';

@Controller('lesson')
export class LessonController {
  constructor(
    private readonly createLessonService: CreateLessonService,
    private readonly getAllLessonsServices: getAllLessonsService,
    private readonly getCourseByIdService: getCourseByIdService,
  ) {}
  @Post()
  async createLesson(@Body() lesson: createLessonDto): Promise<Result<string>> {
    console.log('ANTES DEL IF EN EL CREATELESSONS');
    if (this.getCourseByIdService.getCourseById(lesson.CourseId) != undefined) {
      console.log('DESPUES DEL IF EN EL CREATELESSONS');
      const appService = new LessonService(
        new Logger(
          new CreateLessonApplicationService(this.createLessonService),
          new LoggerImplementation(),
        ),
      );
      console.log('A PUNTO DE LLAMAR A CREATELESSON');
      return appService.createLesson(lesson);
    }
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