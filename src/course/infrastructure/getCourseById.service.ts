import { Injectable } from "@nestjs/common";
import { Result } from "src/utils/Result";
import { getCourseById } from "../application/getCourseById";
import { Course } from "../domain/Course";
import { CourseRepositoryService } from "./CourseRepository.service";
import { getCourseByIdDto } from "./getCourseById.dto";



@Injectable()
export class getCourseByIdService implements getCourseById {
  constructor(
    private readonly courseRepository: CourseRepositoryService,
  ) {}
    
  async getCourseById(course: getCourseByIdDto): Promise<Result<Course>> {
    return this.courseRepository.getCourseById(
        {
           where: { course: parseInt(course.id) },
          });
    );
  }

}