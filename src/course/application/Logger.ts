import { ApplicationService } from 'src/core/application/ApplicationService';
import { ILogger } from 'src/core/application/ILogger';
import { Result } from 'src/utils/Result';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { ServiceDecorator } from './ServiceDecorator';

export class Logger extends ServiceDecorator<CourseParameterObject, string> {
  appService: ApplicationService<CourseParameterObject, string>;
  iLogger: ILogger;
  constructor(
    appService: ApplicationService<CourseParameterObject, string>,
    iLogger: ILogger,
  ) {
    super();
    this.appService = appService;
    this.iLogger = iLogger;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    const result = this.appService.execute(service);
    this.iLogger.log('comando: ' + (await result).get());
    console.log('comando: ' + (await result).get());
    return await result;
  }
}
