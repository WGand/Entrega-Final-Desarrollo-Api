import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';

export abstract class ServiceDecorator<ServiceT, T>
  implements ApplicationService<ServiceT, T>
{
  abstract execute(service: ServiceT): Promise<Result<T>>;
}
