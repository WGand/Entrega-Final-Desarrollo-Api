import { LessonDescriptionVO } from './value_objects/LessonDescriptionVO';
import { LessonTitleVO } from './value_objects/LessonTitleVO';
import { LessonIdVO } from './value_objects/LessonIdVO';
import { Video } from './Video';

export class Lesson {
  private id?: LessonIdVO;
  private title: LessonTitleVO;
  private content: Video;
  private description: LessonDescriptionVO;
  private comments?: Comment[];

  constructor(
    title: LessonTitleVO,
    content: Video,
    description: LessonDescriptionVO,
    comments?: Comment[],
    id?: LessonIdVO,
  ) {
    this.content = content;
    this.comments = comments;
    this.description = description;
    this.title = title;
    this.id = id;
  }
  getContent(): Video {
    return this.content;
  }
  getComments(): Comment[] {
    return this.comments;
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

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  /*tambien le colocamos el idVO?*/
}
