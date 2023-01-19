import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
export class createLessonDto {

  @IsNumber()
  @IsNotEmpty()
  id: number;

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

  @IsString()
  @IsNotEmpty()
  CourseId: string;
}
