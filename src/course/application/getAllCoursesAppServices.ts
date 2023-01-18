import { Result } from 'src/utils/Result';
import { Course } from '../domain/Course';
import { getAllCourses } from './GetAllCourses';

export class getAllCoursesApplicationService {
  constructor(private readonly getAllCoursesService: getAllCourses) {
    this.getAllCoursesService = getAllCoursesService;
  }
  async execute(): Promise<Result<Iterable<Course>>> {
    const course = await this.getAllCoursesService.getAllCourses();
    return course;
  }
}
