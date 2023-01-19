import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from 'src/utils/Result';
import { Repository } from 'typeorm';
import { CourseFactory } from '../../domain/CourseFactory';
import { LessonRepository } from '../../domain/LessonRepository';
import { CourseEntity } from '../course.entity';
import { LessonEntity } from '../lesson.entity';
import { Lesson } from '../../domain/Lesson';
import { createLessonDto } from '../createLesson.dto';
import { LessonDescriptionVO } from '../../domain/value_objects/LessonDescriptionVO';

@Injectable()
export class LessonRepositoryService implements LessonRepository {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    @InjectRepository(LessonEntity)
    private readonly lessonRepository: Repository<LessonEntity>,
    private readonly courseFactory: CourseFactory,
  ) {}
  async createLesson(lesson: Lesson,courseId: number,): Promise<Result<string>> {
    const lessonDto = new createLessonDto();

    lessonDto.title = lesson.getTitle().getValue();
    lessonDto.description = lesson.getDescription().getValue();
    lessonDto.video = {
      videoUrl: lesson.getContent().getUrl().getValue(),
      type: lesson.getContent().getType(),
      title: lesson.getContent().getTitle().getValue(),
      videoDuration: lesson.getContent().getDuration().getValue(),
    };
    lessonDto.CourseId = String(courseId);
    if (lesson.isValid()) {
      return new Result(
        this.courseFactory
          .createLesson(await this.lessonRepository.save(lessonDto))
          .get()
          .getTitle()
          .getValue(),
      );
    }
    return new Result('Leccion no valida');
  }

  async getLessons(id: string): Promise<Result<Iterable<Lesson>>> {
    console.log('GETLESSONS REPO SERVICE');
    const list = await this.lessonRepository.find({
      where: {
        CourseId: id,
      },
    });
    return new Result(list as Iterable<Lesson>);
  }

  async deleteLesson(LessonID: string): Promise<Result<string>> {
    console.log('DELETE REPO SERVICE');
    this.lessonRepository.delete(parseInt(LessonID));
    return new Result('Leccion Borrada');
  }

}