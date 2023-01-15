import { ApplicationService } from "src/core/application/ApplicationService";
import { Result } from "src/utils/Result";
import { CourseParameterObject } from "../domain/CourseParameterObject";
import { getCourseByIdDto } from "../infrastructure/getCourseById.dto";
import { getCourseById } from "./getCourseById";




export class getCourseByIdApplicationService
  implements ApplicationService<CourseParameterObject, string>
{
  constructor(private readonly getCourseByIdService: getCourseById) {
    this.getCourseByIdService = getCourseByIdService;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    const course = this.getCourseByIdService.getCourseById(
      service as unknown as getCourseByIdDto,
    );
    return new Result((await course).get().getId().getValue().toString());
  }

  async getCourseById(
    courseDto: getCourseByIdDto,
  ): Promise<CourseParameterObject> {
    const course = await this.getCourseByIdService.getCourseById(courseDto);
    console.log(course);
    const courseParameterObject = new CourseParameterObject(
      course.get().getId().getValue().toString(),
    );
    return courseParameterObject;
  }
}