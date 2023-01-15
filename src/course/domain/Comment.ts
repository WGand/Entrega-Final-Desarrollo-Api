import { CommentIdVO } from './value_objects/CommentIdVO';
import { CommentMessageVO } from './value_objects/CommentMessageVO';

export class Comment {
  private readonly id: CommentIdVO;
  private readonly comment: CommentMessageVO;
  constructor(comment: CommentMessageVO, id?: CommentIdVO) {
    this.id = id;
    this.comment = comment;
  }
  getId(): CommentIdVO {
    return this.id;
  }
  getComment(): CommentMessageVO {
    return this.comment;
  }
}
