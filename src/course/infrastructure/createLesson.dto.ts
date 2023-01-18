import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
export class createLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @ValidateNested()
  video: {
    videoUrl: string;
    type: string;
    title: string;
    videoDuration: number;
  };
  comments: Comment[];

  @IsString()
  @IsNotEmpty()
  CourseId: string
}