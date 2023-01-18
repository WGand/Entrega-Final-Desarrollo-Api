import { ILogger } from 'src/core/application/ILogger';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

export class LoggerImplementation implements ILogger {
  log(message: string): void {
    fs.appendFile('log.txt', `\n` + message, function (err) {
      if (err) throw err;
      else {
        console.log('Guardado');
      }
    });
  }
}
