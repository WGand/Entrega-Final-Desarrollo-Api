import { Injectable } from '@nestjs/common';
import { Result } from 'src/utils/Result';
import { createCourseDto } from '../createCourse.dto';
import { UpdateCourse } from './../../../course/application/UpdateCourse/UpdateCourse';

@Injectable()
export class UpdateCourseService implements UpdateCourse {
  async updateCourse(course: createCourseDto): Promise<Result<string>> {
    return this.updateCourse(course);
  }
}
