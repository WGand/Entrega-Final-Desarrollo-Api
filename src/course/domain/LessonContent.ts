import { ContentTitleVO } from './value_objects/ContentTitleVO';
import { ContentTypeEnum } from './ContentType';

export abstract class Content {
  private readonly type: ContentTypeEnum;
  private readonly title: ContentTitleVO;
  constructor(type: ContentTypeEnum, title: ContentTitleVO) {
    this.type = type;
    this.title = title;
  }
  getType(): ContentTypeEnum {
    return this.type;
  }
  getTitle(): ContentTitleVO {
    return this.title;
  }
}
