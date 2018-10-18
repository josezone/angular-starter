import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { WindowToken, WindowRefService } from './window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class GaService {

  private previousUrl: string | undefined;

  constructor(
    private windowRef: WindowRefService
  ) {
    this.ga('create', environment['gaId'], 'auto');
  }

  locationChanged(url: string) {
    this.sendPage(url);
  }

  sendPage(url: string) {
    if (url === this.previousUrl) { return; }
    this.previousUrl = url;
    this.ga('set', 'page', '/' + url);
    this.ga('send', 'pageview');
  }

  sendEvent(source: string, action: string, label?: string, value?: number) {
    this.ga('send', 'event', source, action, label, value);
  }

  ga(...args: any[]) {
    const gaFn = (this.windowRef.nativeWindow as any)['ga'];
    if (gaFn) {
      gaFn(...args);
    }
  }

}
