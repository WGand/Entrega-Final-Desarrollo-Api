import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity';
import { CourseRepositoryService } from './CourseRepository.service';
import { CreateCourseService } from './CreateCourse.service';
import { CreateLessonService } from './CreateLesson.service';
import { getAllCoursesService } from './getAllCourses.service';
import { getCourseByIdService } from './getCourseById.service';
import { LessonController } from './lesson.controller';
import { LessonEntity } from './lesson.entity';
import { LessonRepositoryService } from './LessonRepository.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, LessonEntity])],
  controllers: [CourseController, LessonController],
  providers: [
    CourseRepositoryService,
    CourseFactory,
    CreateCourseService,
    getCourseByIdService,
    getAllCoursesService,
    CreateLessonService,
    LessonRepositoryService,
  ],
})
export class CourseModule { }
