import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity';
import { CourseRepositoryService } from './CourseRepository.service';
import { CreateCourseService } from './CreateCourse.service';
import { CreateLessonService } from './CreateLesson.service';
import { DeleteCourseService } from './DeleteCourse.service';
import { getAllCoursesService } from './getAllCourses.service';
import { getAllLessonsService } from './GetAllLessons.Service';
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
    getAllLessonsService,
  ],
})
export class CourseModule {}
