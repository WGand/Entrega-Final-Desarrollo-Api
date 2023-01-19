import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseStateEnum } from 'src/course/domain/CourseStateEnum';
import { Result } from 'src/utils/Result';
import { Repository } from 'typeorm';
import { Course } from '../../domain/Course';
import { CourseFactory } from '../../domain/CourseFactory';
import { CourseRepository } from '../../domain/CourseRepository';
import { CourseEntity } from '../course.entity';
import { createCourseDto } from '../createCourse.dto';
import { LessonEntity } from '../lesson.entity';
import { LessonRepositoryService } from '../LessonServices/LessonRepository.service';

@Injectable()
export class CourseRepositoryService implements CourseRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    private readonly courseFactory: CourseFactory,
    private readonly lessonService: LessonRepositoryService,
  ) {}
  async updateCourse(course: Course): Promise<Result<string>> {
    const lessons = Array.from(
      (await this.lessonService.getLessons(course as unknown as string)).get(),
    );
    console.log(lessons.length);
    if (lessons.length >= 2) {
      const courseUpdate = await this.getCourseById(
        course as unknown as string,
      );
      console.log(courseUpdate.get()[0]);
      courseUpdate.get()[0].state = CourseStateEnum.Published;
      this.courseRepository.save(courseUpdate.get()[0]);
      return new Result(courseUpdate.get()[0].title);
    }
    return new Result('Curso no valido');
  }

  async createCourse(course: Course): Promise<Result<string>> {
    const courseDto = new createCourseDto();
    courseDto.title = course.getTitle().getValue();
    courseDto.description = course.getDescription().getValue();
    courseDto.state = course.getState();
    courseDto.imagen = course.getImage().getValue();
    courseDto.professorName = course.getProfessorName().getValue();
    if (course.isValid()) {
      return new Result(
        this.courseFactory
          .createCourse(await this.courseRepository.save(courseDto))
          .get()
          .getTitle()
          .getValue(),
      );
    }
    return new Result('Curso no valido');
  }

  async getAllCourses(): Promise<Result<Iterable<Course>>> {
    console.log('GETALLCOURSES REPO SERVICE');
    const list = await this.courseRepository.find({
      where: {
        state: 'Published',
      },
    });
    return new Result(list as Iterable<Course>);
  }

  async getCourseById(id: string): Promise<Result<Iterable<Course>>> {
    console.log('GETCOURSEBYID REPO SERVICE');
    const list = await this.courseRepository.find({
      where: {
        id: id,
      },
    });
    return new Result(list as Iterable<Course>);
  }

  async DeleteCourseById(id: string): Promise<Result<string>> {
    console.log('DELETE REPO SERVICE');
    this.courseRepository.delete(parseInt(id));
    return new Result('Curso Borrado');
  }
}
