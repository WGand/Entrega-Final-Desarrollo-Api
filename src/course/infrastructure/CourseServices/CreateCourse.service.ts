import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CreateCourse } from '../../application/CreateCourse/CreateCourse';
import { CourseFactory } from '../../domain/CourseFactory';
import { CourseRepositoryService } from './CourseRepository.service';
import { createCourseDto } from '../createCourse.dto';

@Injectable()
export class CreateCourseService implements CreateCourse {
  constructor(
    private readonly courseRepository: CourseRepositoryService,
    private readonly courseFactory: CourseFactory,
  ) {}
  async createCourse(course: createCourseDto): Promise<Result<string>> {
    return await this.courseRepository.createCourse(
      this.courseFactory.createCourse(course).get(),
    );
  }
}
