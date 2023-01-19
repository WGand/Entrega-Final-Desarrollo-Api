import { Result } from 'src/utils/Result';
import { Lesson } from '../../domain/Lesson';
import { getAllLessons } from './GetAllLesonsGivenByID';

export class getAllLessonsApplicationService {
  constructor(private readonly getAllLessonsService: getAllLessons) {
    this.getAllLessonsService = getAllLessonsService;
  }
  async execute(id: number): Promise<Result<Iterable<Lesson>>> {
    const course = await this.getAllLessonsService.getAllLesson(id);
    return course;
  }
}
