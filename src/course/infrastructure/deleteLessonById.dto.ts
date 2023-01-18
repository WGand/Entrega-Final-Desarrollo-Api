import { IsNotEmpty, IsString } from 'class-validator';

export class deleteLessonByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}