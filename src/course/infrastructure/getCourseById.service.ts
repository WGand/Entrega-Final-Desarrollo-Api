/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { CreateCourse } from '../application/CreateCourse';
import { getAllCourses } from '../application/GetAllCourses';
import { getCourseById } from '../application/getCourseById';
import { Course } from '../domain/Course';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseRepositoryService } from './CourseRepository.service';
import { createCourseDto } from './createCourse.dto';

@Injectable()
export class getCourseByIdService implements getCourseById {
  constructor(private readonly courseRepository: CourseRepositoryService) {}
  getCourseById(id: string): Promise<Result<Iterable<Course>>> {
    console.log('GETBYID SERVICE SERVICE');
    return this.courseRepository.getCourseById(id);
import { getCourseByIdDto } from './getCourseById.dto';

@Injectable()
export class getCourseByIdService implements getCourseById {
  constructor(
    private readonly courseRepository: CourseRepositoryService,
    private readonly courseFactory: CourseFactory,
  ) {}
  async getCourseById(course: getCourseByIdDto): Promise<Result<Course>> {
    return this.courseRepository.getCourseById(
      this.courseFactory.getCourseById(course).get().getId(),
    );
  }
}
