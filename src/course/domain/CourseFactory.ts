import { Result } from 'src/utils/Result';
import { CoursePayload } from '../application/coursePayload';
import { createCourseDto } from '../infrastructure/createCourse.dto';
import { createLessonDto } from '../infrastructure/createLesson.dto';
import { Course } from './Course';
import { CourseStateEnum } from './CourseStateEnum';
import { Lesson } from './Lesson';
import { Content } from './LessonContent';
import { CourseDescriptionVO } from './value_objects/CourseDescriptionVO';
import { CourseIdVO } from './value_objects/CourseIdVO';
import { CourseTitleVO } from './value_objects/CourseTitleVO';
import { ImagenVO } from './value_objects/ImagenVO';
import { LessonDescriptionVO } from './value_objects/LessonDescriptionVO';
import { LessonTitleVO } from './value_objects/LessonTitleVO';
import { Comment } from './Comment';
import { Video } from './Video';
import { VideoUrlVO } from './value_objects/VideoUrlVO';
import { ContentTypeEnum } from './ContentType';
import { ContentTitleVO } from './value_objects/ContentTitleVO';
import { VideoDurationVO } from './value_objects/VideoDurationVO';
import { CommentMessageVO } from './value_objects/CommentMessageVO';


export class CourseFactory {
  createCourse(course: createCourseDto): Result<Course> {
    const courseCreated = new Course(
      new CourseTitleVO(course.title),
      new CourseDescriptionVO(course.description),
      CourseStateEnum[course.state],
      new ImagenVO(course.imagen),
    );
    return new Result<Course>(courseCreated);

  }

  createLesson(lesson: createLessonDto): Result<Lesson> {
    const lessonCreated = new Lesson(

      new LessonTitleVO(lesson.title),
      new Video(
        new VideoUrlVO(lesson.video.videoUrl),
        ContentTypeEnum[lesson.video.type],
        new ContentTitleVO(lesson.video.title),
        new VideoDurationVO(lesson.video.videoDuration),
      ),
      new LessonDescriptionVO(lesson.description),

      lesson.comments,
    );
    return new Result<Lesson>(lessonCreated)

    /*es que igual te pide los 5 parametros */
  }


}
