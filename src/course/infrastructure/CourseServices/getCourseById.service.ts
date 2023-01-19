/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { getCourseById } from '../../application/GetCourse/getCourseById';
import { Course } from '../../domain/Course';
import { CourseRepositoryService } from './CourseRepository.service';

@Injectable()
export class getCourseByIdService implements getCourseById {
  constructor(private readonly courseRepository: CourseRepositoryService) {}
  getCourseById(id: string): Promise<Result<Iterable<Course>>> {
    console.log('GETBYID SERVICE SERVICE');
    return this.courseRepository.getCourseById(id);
  }
}
