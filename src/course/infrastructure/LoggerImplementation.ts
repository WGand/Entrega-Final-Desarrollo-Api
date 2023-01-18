
import { ILogger } from 'src/core/application/ILogger';
import {writeFile} from 'fs/promises';

export class LoggerImplementation implements ILogger {


  save(data: {}): void {
    writeFile('./data/logger.json', JSON.stringify(data, null, 2), 'utf8');
}

 saveJson(context: string, message: string){
    const data: {} = {
        context: context,
        message: message,
        date: new Date().toISOString()
    };
    writeFile('./logger.json', JSON.stringify(data, null, 2,), 'utf8');

}
}
