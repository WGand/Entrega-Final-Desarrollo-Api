import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from 'src/utils/Result';
import { Repository } from 'typeorm';
import { Course } from '../domain/Course';
import { CourseFactory } from '../domain/CourseFactory';
import { LessonRepository } from '../domain/LessonRepository';
import { CourseEntity } from './course.entity';
import { createCourseDto } from './createCourse.dto';
import { LessonEntity } from './lesson.entity';
import { Lesson } from '../domain/Lesson';
import { createLessonDto } from './createLesson.dto';

@Injectable()
export class LessonRepositoryService implements LessonRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    private readonly courseFactory: CourseFactory,
  ) {}
    async createLesson(lesson: Lesson,course: Course): Promise<Result<Course>> {
      const lessonDto = new createLessonDto();
      lessonDto.title = lesson.getTitle().getValue();
      lessonDto.description=lesson.getDescription().getValue();
      
        
    }



    /**/ 

 
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