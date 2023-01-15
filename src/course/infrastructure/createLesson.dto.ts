import { IsNotEmpty, IsString } from 'class-validator';

export class createLessonDto { 
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
  @IsString()
  @IsNotEmpty()
  content: string;
}