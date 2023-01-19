import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseFactory } from '../domain/CourseFactory';
import { CourseController } from './course.controller';
import { CourseEntity } from './course.entity';
import { CourseRepositoryService } from './CourseServices/CourseRepository.service';
import { CreateCourseService } from './CourseServices/CreateCourse.service';
import { CreateLessonService } from './LessonServices/CreateLesson.service';
import { getAllCoursesService } from './CourseServices/getAllCourses.service';
import { getAllLessonsService } from './LessonServices/GetAllLessons.Service';
import { getCourseByIdService } from './CourseServices/getCourseById.service';
import { LessonController } from './lesson.controller';
import { LessonEntity } from './lesson.entity';
import { LessonRepositoryService } from './LessonServices/LessonRepository.service';
<<<<<<< Updated upstream
import { DeleteCourseService } from './CourseServices/DeleteCourse.service';
=======
import { UpdateCourseService } from './CourseServices/UpdateCourse.service';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    DeleteCourseService
=======
    UpdateCourseService,
>>>>>>> Stashed changes
  ],
})
export class CourseModule {}
