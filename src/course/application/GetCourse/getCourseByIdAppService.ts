/* eslint-disable prettier/prettier */
import { Result } from 'src/utils/Result';
import { Course } from '../../domain/Course';
import { getCourseById } from './getCourseById';

export class getCourseByIdApplicationService {
  constructor(private readonly getCourseByIdService: getCourseById) {
    this.getCourseByIdService = getCourseByIdService;
  }
  async execute(id: string): Promise<Result<Iterable<Course>>> {
    const course = await this.getCourseByIdService.getCourseById(id);
    return course;
  }
}
