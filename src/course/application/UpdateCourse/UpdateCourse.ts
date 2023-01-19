import { Result } from 'src/utils/Result';
import { createCourseDto } from '../../infrastructure/createCourse.dto';

export interface UpdateCourse {
  updateCourse(course: createCourseDto): Promise<Result<string>>;
}
