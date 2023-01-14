import { Result } from 'src/utils/Result';
import { ServiceDecorator } from './ServiceDecorator';

export class Logger<ServiceT> extends ServiceDecorator<ServiceT> {
  execute<T>(service: ServiceT): Promise<Result<T>> {
    console.log('Log: ', service);
    return this.execute(service);
  }
}
