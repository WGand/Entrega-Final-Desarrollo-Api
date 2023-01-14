export interface ApplicationService<ServiceT> {
  execute<T>(service: ServiceT): Promise<T>;
}
