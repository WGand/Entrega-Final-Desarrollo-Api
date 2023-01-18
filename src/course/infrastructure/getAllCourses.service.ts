import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { getAllCourses } from '../application/GetAllCourses';
import { Course } from '../domain/Course';
import { CourseRepositoryService } from './CourseRepository.service';

@Injectable()
export class getAllCoursesService implements getAllCourses {
  constructor(private readonly courseRepository: CourseRepositoryService) {}
  getAllCourses(): Promise<Result<Iterable<Course>>> {
    console.log('GETALLCOURSES SERVICE SERVICE');
    return this.courseRepository.getAllCourses();
  }
}
