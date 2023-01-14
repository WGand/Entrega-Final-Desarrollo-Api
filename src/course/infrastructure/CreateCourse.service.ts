import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CoursePayload } from '../application/coursePayload';
import { CreateCourse } from '../application/CreateCourse';
import { Course } from '../domain/Course';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseRepositoryService } from './CourseRepository.service';
import { createCourseDto } from './createCourse.dto';

@Injectable()
export class CreateCourseService implements CreateCourse {
  constructor(
    private readonly courseRepository: CourseRepositoryService,
    private readonly courseFactory: CourseFactory,
  ) {}
  createCourse(course: createCourseDto): Promise<Result<Course>> {
    return this.courseRepository.createCourse(
      this.courseFactory.createCourse(course).get(),
    );
  }

  //   async createCourse(course: createCourseDto): Promise<Result<Course>> {
  //     return this.courseRepository.createCourse(course);
  //   }
}
