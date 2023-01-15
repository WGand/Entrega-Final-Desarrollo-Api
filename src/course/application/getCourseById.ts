import { Result } from "src/utils/Result";
import { Course } from "../domain/Course";
import { getCourseByIdDto } from "../infrastructure/getCourseById.dto";
export interface getCourseById {
    getCourseById(course: getCourseByIdDto): Promise<Result<Course>>;
  }
  