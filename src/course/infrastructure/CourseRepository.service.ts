import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from 'src/utils/Result';
import { Repository } from 'typeorm';
import { CoursePayload } from '../application/coursePayload';
import { Course } from '../domain/Course';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseRepository } from '../domain/CourseRepository';
import { CourseIdVO } from '../domain/value_objects/CourseIdVO';
import { CourseEntity } from './course.entity';
import { createCourseDto } from './createCourse.dto';
import { getCourseByIdDto } from './getCourseById.dto';
import { LessonEntity } from './lesson.entity';

@Injectable()
export class CourseRepositoryService implements CourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    private readonly courseFactory: CourseFactory,
  ) {}
  async getCourseById(id: CourseIdVO): Promise<Result<Course>> {
   const courseDto = new getCourseByIdDto();
   courseDto.id = id.getValue().toString();
   return await this.courseRepository.findOne({
    where: { course: parseInt(courseDto) },
  });
  }

  async createCourse(course: Course): Promise<Result<Course>> {
    const courseDto = new createCourseDto();
    courseDto.title = course.getTitle().getValue();
    courseDto.description = course.getDescription().getValue();
    courseDto.state = course.getState();
    courseDto.imagen = course.getImage().getValue();
    return this.courseFactory.createCourse(
      await this.courseRepository.save(courseDto),
    );
  }
  
  
}
