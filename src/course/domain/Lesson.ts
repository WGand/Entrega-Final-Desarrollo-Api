import { LessonDescriptionVO } from './value_objects/LessonDescriptionVO';
import { LessonTitleVO } from './value_objects/LessonTitleVO';
import { LessonIdVO } from './value_objects/LessonIdVO';
import { Video } from './Video';

export class Lesson {
  private id?: LessonIdVO;
  private title: LessonTitleVO;
  private description: LessonDescriptionVO;
  private video: Video;

  constructor(
    title: LessonTitleVO,
    video: Video,
    description: LessonDescriptionVO,
    comments?: Comment[],
    id?: LessonIdVO,


  ) {
    this.video = video;
    this.description = description;
    this.title = title;
    this.id = id;
  }
  getContent(): Video {
    return this.video;
  }

  getDescription(): LessonDescriptionVO {
    return this.description;
  }

  getTitle(): LessonTitleVO {
    return this.title;
  }

  getId(): LessonIdVO {
    return this.id;
  }




  /*tambien le colocamos el idVO?*/
}