import { Result } from 'src/utils/Result';

export interface ApplicationService<ServiceT> {
  execute<T>(service: ServiceT): Promise<Result<T>>;
}
