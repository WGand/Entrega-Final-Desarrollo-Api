import { Result } from 'src/utils/Result';
import { createCourseDto } from '../../infrastructure/createCourse.dto';

export interface CreateCourse {
  createCourse(course: createCourseDto): Promise<Result<string>>;
}
