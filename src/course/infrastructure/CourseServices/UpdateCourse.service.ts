import { Injectable } from '@nestjs/common';
import { Course } from 'src/course/domain/Course';
import { Result } from 'src/utils/Result';
import { createCourseDto } from '../createCourse.dto';
import { UpdateCourse } from './../../../course/application/UpdateCourse/UpdateCourse';
import { CourseRepositoryService } from './CourseRepository.service';

@Injectable()
export class UpdateCourseService implements UpdateCourse {
  constructor(private readonly courseRepository: CourseRepositoryService) {}
  async updateCourse(course: createCourseDto): Promise<Result<string>> {
    console.log('updateCourseService');
    console.log(
      await this.courseRepository.updateCourse(course as unknown as Course),
    );
    return await this.courseRepository.updateCourse(
      course as unknown as Course,
    );
  }
}
