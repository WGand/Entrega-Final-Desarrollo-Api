import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { getCourseById } from '../application/getCourseById';
import { Course } from '../domain/Course';
import { LessonRepositoryService } from './LessonRepository.service';
import { deleteLessonById } from '../application/deleteLessonById';
import { createLessonDto } from './createLesson.dto';

@Injectable()
export class deleteLessonByIdService implements deleteLessonById {
  constructor(private readonly lessonRepository: LessonRepositoryService) { }

    deleteLessonById(id: string): Promise<void> {
        console.log('DELETEBYID SERVICE SERVICE');
        this.lessonRepository.deleteLessonGivenByID(id);
        return;
    }
}