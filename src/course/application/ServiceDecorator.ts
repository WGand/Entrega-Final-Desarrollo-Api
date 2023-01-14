import { ApplicationService } from 'src/core/application/ApplicationService';
import { Result } from 'src/utils/Result';

export abstract class ServiceDecorator<ServiceT>
  implements ApplicationService<ServiceT>
{
  abstract execute<T>(service: ServiceT): Promise<Result<T>>;
}
