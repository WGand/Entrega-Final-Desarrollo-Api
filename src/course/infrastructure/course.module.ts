import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity';
import { CourseRepositoryService } from './CourseRepository.service';
import { CreateCourseService } from './CreateCourse.service';
import { getCourseByIdService } from './getCourseById.service';
import { LessonEntity } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, LessonEntity])],
  controllers: [CourseController],
  providers: [CourseRepositoryService, CourseFactory, CreateCourseService,getCourseByIdService],
})
export class CourseModule {}
