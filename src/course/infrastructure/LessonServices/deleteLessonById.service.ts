import { Injectable } from '@nestjs/common';
import { LessonRepositoryService } from './LessonRepository.service';
import { deleteLessonById } from '../../application/DeleteLesson/deleteLessonById';

@Injectable()
export class deleteLessonByIdService implements deleteLessonById {
  constructor(private readonly lessonRepository: LessonRepositoryService) {}

  deleteLessonById(id: string): Promise<void> {
    console.log('DELETEBYID SERVICE SERVICE');
    this.lessonRepository.deleteLessonGivenByID(id);
    return;
  }
}
