import { Injectable } from '@nestjs/common';
import { LessonRepositoryService } from './LessonRepository.service';
import { deleteLesson } from '../../application/DeleteLesson/deleteLesson';
import { LessonIdVO } from 'src/course/domain/value_objects/LessonIdVO';
import { Result } from 'src/utils/Result';

@Injectable()
export class deleteLessonService implements deleteLesson {
  constructor(private readonly lessonRepository: LessonRepositoryService) {}

  async deleteLesson(id: LessonIdVO): Promise<Result<string>> {
    this.lessonRepository.deleteLesson(String(id.getValue()))
    return new Result('Se Borro');
  }
}
