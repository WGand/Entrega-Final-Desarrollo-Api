import { IsNotEmpty, IsString } from 'class-validator';

export class createLessonDto { 
  @IsString()
  @IsNotEmpty()
  type: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  

  /*  */
}