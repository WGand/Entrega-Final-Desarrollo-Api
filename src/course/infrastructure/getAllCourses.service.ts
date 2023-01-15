import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CreateCourse } from '../application/CreateCourse';
import { getAllCourses } from '../application/GetAllCourses';
import { Course } from '../domain/Course';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseRepositoryService } from './CourseRepository.service';
import { createCourseDto } from './createCourse.dto';

@Injectable()
export class getAllCoursesService implements getAllCourses {
  constructor(
    private readonly courseRepository: CourseRepositoryService,
  ) {}
    getAllCourses(): Promise<Result<Iterable<Course>>> {
        console.log('GETALLCOURSES SERVICE SERVICE');
     return this.courseRepository.getAllCourses()
    };
}