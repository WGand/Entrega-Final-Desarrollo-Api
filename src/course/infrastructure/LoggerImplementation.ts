import { Logger } from '@nestjs/common';
import { ILogger } from 'src/core/application/ILogger';

export class LoggerImplementation implements ILogger {
  log(message: string): void {
    Logger.verbose(message);
  }
}
