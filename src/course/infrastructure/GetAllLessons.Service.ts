import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { getAllLessons } from '../application/GetAllLesonsGivenByID';
import { Lesson } from '../domain/Lesson';
import { LessonRepositoryService } from './LessonRepository.service';


@Injectable()
export class getAllLessonsService implements getAllLessons {
  constructor(private readonly LessonsRepository: LessonRepositoryService) {

  }
    getAllLesson(id:number): Promise<Result<Iterable<Lesson>>> {
        console.log('GETALLLESSONS SERVICE SERVICE');
        return this.LessonsRepository.getLessons(String(id));
    }
}