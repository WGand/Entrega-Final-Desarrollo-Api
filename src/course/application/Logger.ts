import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';
import { CourseParameterObject } from '../domain/CourseParameterObject';
import { ServiceDecorator } from './ServiceDecorator';

export class Logger extends ServiceDecorator<CourseParameterObject, string> {
  appService: ApplicationService<CourseParameterObject, string>;
  constructor(appService: ApplicationService<CourseParameterObject, string>) {
    super();
    this.appService = appService;
  }
  async execute(service: CourseParameterObject): Promise<Result<string>> {
    
    const fs = require('fs/promises');
    await fs.writeFile('./test.txt', service);
    console.log('Log: ', service);
    const result = this.appService.execute(service);
    return await new Result('asdasd');
  }
}
