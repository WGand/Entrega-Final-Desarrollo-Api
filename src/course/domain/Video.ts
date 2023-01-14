import { ContentTypeEnum } from './ContentType';
import { Content } from './LessonContent';
import { ContentTitleVO } from './value_objects/ContentTitleVO';
import { VideoDurationVO } from './value_objects/VideoDurationVO';
import { VideoIdVO } from './value_objects/VideoIdVo';
import { VideoUrlVO } from './value_objects/VideoUrlVO';

export class Video extends Content {
  private videoUrl: VideoUrlVO;
  private videoDuration: VideoDurationVO;
  private videoId: VideoIdVO;
  constructor(
    videoUrl: VideoUrlVO,
    type: ContentTypeEnum,
    title: ContentTitleVO,
    videoDuration: VideoDurationVO,
    videoId: VideoIdVO,
  ) {
    super(type, title);
    this.videoUrl = videoUrl;
    this.videoDuration = videoDuration;
    this.videoId = videoId;
  }
  getUrl(): VideoUrlVO {
    return this.videoUrl;
  }
  getDuration(): VideoDurationVO {
    return this.videoDuration;
  }
  getId(): VideoIdVO {
    return this.videoId;
  }
}
