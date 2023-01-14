import { Result } from 'src/utils/Result';

export interface ApplicationService<ServiceT, T> {
  execute(service: ServiceT): Promise<Result<T>>;
}
