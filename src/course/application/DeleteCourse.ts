import { Result } from 'src/utils/Result';
import { CourseIdVO } from '../domain/value_objects/CourseIdVO';

export interface DeleteCourse {
  DeleteCourse(id:CourseIdVO): Promise<Result<string>>;
}
