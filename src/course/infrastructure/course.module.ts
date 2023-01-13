import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseEntity } from './course.entity';
import { LessonEntity } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity, LessonEntity])],
  controllers: [],
  providers: [],
})
export class CourseModule {}
