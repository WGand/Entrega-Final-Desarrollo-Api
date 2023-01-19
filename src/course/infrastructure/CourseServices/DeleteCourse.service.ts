import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { DeleteCourse } from '../../application/DeleteCourse/DeleteCourse';
import { CourseIdVO } from '../../domain/value_objects/CourseIdVO';
import { CourseRepositoryService } from './CourseRepository.service';

@Injectable()
export class DeleteCourseService implements DeleteCourse {
  constructor(private readonly courseRepository: CourseRepositoryService) {}
  async DeleteCourse(id: CourseIdVO): Promise<Result<string>> {
    this.courseRepository.DeleteCourseById(String(id.getValue()));
    return new Result('Se Borro');
  }
}
