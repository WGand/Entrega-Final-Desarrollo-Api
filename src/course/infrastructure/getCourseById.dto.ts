import { IsNotEmpty, IsString } from "class-validator";

export class getCourseByIdDto {
    @IsString()
    @IsNotEmpty()
    id: string;
  }
  