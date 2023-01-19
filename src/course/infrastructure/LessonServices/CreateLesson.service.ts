import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { LessonRepositoryService } from './LessonRepository.service';
import { CourseFactory } from 'src/course/domain/CourseFactory';
import { CreateLesson } from 'src/course/application/CreateLesson/CreateLesson';
import { createLessonDto } from '../createLesson.dto';

@Injectable()
export class CreateLessonService implements CreateLesson {
  constructor(
    private readonly lessonRepository: LessonRepositoryService,
    private readonly courseFactory: CourseFactory,
  ) { }
  async createLesson(lesson: createLessonDto): Promise<Result<string>> {
    return this.lessonRepository.createLesson(
      this.courseFactory.createLesson(lesson).get(),
      parseInt(lesson.CourseId)
    );
  }
}
