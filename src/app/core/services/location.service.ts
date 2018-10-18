import { Injectable } from '@angular/core';

import { Location, PlatformLocation } from '@angular/common';
import { ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GaService } from './ga.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private urlSubject = new ReplaySubject<string>(1);

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }

  currentUrl = this.urlSubject
    .pipe(map(url => this.stripSlashes(url)));

  currentPath = this.currentUrl.pipe(
    map(url => (url.match(/[^?#]*/) || [])[0]),
    tap(path => this.gaService.locationChanged(path)),
  );

  constructor(
    private location: Location,
    private gaService: GaService
  ) {
    this.urlSubject.next(location.path(true));
    this.location.subscribe(state => {
      return this.urlSubject.next(state.url || '');
    });
    this.currentPath.subscribe();
   }
}
