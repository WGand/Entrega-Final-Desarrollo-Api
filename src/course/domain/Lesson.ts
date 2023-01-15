import { Content } from './LessonContent';
import { LessonDescriptionVO } from './value_objects/LessonDescriptionVO';
import { LessonTitleVO } from './value_objects/LessonTitleVO';
import { LessonIdVO } from './value_objects/LessonIdVO';

export class Lesson {
  private content: Content;
  private comments: Comment[];
  private description: LessonDescriptionVO;
  private title: LessonTitleVO;
  private id: LessonIdVO;


  constructor(content: Content) {
    this.content = content;
  }
  getContent(): Content {
    return this.content;
  }
  getComments(): Comment[] {
    return this.comments;
  }

  getDescription(): LessonDescriptionVO{
    return this.description
  }
    

  getTitle(): LessonTitleVO{
    return this.title 
  }

  getId(): LessonIdVO{

    return this.id;
  }
  

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }


  /*tambien le colocamos el idVO?*/ 
}
