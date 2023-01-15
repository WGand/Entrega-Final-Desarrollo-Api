import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { getCourseById } from './getCoursesById';

export class getCoursesByIdApplicationService {
  constructor(private readonly getCoursesByIdService: getCourseById) {
    this.getCoursesByIdService= getCoursesByIdService;
  }
  async execute(id: string): Promise<Result<Iterable<Course>>> {
    const course = await this.getCoursesByIdService.getCoursesById(id);
    return course;
  }
}
