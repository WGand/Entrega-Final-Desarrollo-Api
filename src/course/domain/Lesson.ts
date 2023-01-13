import { Content } from './LessonContent';

export class Lesson {
  private content: Content;
  private comments: Comment[];
  constructor(content: Content) {
    this.content = content;
  }
  getContent(): Content {
    return this.content;
  }
  getComments(): Comment[] {
    return this.comments;
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}
