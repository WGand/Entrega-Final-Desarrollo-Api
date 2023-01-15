import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { createCourseDto } from '../infrastructure/createCourse.dto';

export interface getCourseById {
    getCoursesById(id: string): Promise<Result<Iterable<Course>>>;
}