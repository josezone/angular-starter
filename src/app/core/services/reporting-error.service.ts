import { Injectable, ErrorHandler } from '@angular/core';
import { GaService } from './ga.service';

@Injectable({
  providedIn: 'root'
})
export class ReportingErrorService extends ErrorHandler {

  constructor(
    private gaService: GaService
  ) {
    super();
  }

  handleError(error: string | Error) {
    try {
      super.handleError(error);
    } catch (e) {
      this.reportError(e);
    }
    this.reportError(error);
  }

  private reportError(error: string | Error) {
    let errorData;
    if (typeof error === 'string') {
      errorData = this.manageError(error, undefined, undefined, undefined, undefined);
    } else {
      errorData = this.manageError(error.message, undefined, undefined, undefined, error);
    }
    this.gaService.ga('send', 'exception', { exDescription: errorData, exFatal: true });
  }

  private manageError(msg, url, line, col, e) {
    let stack;
    msg = msg.replace(/^Error: /, '');
    if (e) {
      stack = e.stack
        .replace(/^Error: /, '')
        .replace(msg + '\n', '')
        .replace(/^ +/gm, '')
        .replace(/^at /gm, '')
        .replace(/(?: \(|@)http.+\/([^/)]+)\)?(?:\n|$)/gm, '@$1\n')
        .replace(/ *\(eval code(:\d+:\d+)\)(?:\n|$)/gm, '@???$1\n')
    } else {
      line = line || '?';
      col = col || '?';
      stack = url + ':' + line + ':' + col;
    }
    return (msg + '\n' + stack).substr(0, 150);
  }

}
