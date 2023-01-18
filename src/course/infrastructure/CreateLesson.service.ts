import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CreateLesson } from '../application/CreateLesson';
import { Lesson } from '../domain/Lesson';
import { CourseFactory } from '../domain/CourseFactory';
import { LessonRepositoryService } from './LessonRepository.service';
import { createLessonDto } from './createLesson.dto';

@Injectable()
export class CreateLessonService implements CreateLesson {
  constructor(
    private readonly lessonRepository: LessonRepositoryService,
    private readonly courseFactory: CourseFactory,
  ) { }
  async createLesson(lesson: createLessonDto): Promise<Result<Lesson>> {
    return this.lessonRepository.createLesson(
      this.courseFactory.createLesson(lesson).get(),
      parseInt(lesson.CourseId)
    );
  }
}