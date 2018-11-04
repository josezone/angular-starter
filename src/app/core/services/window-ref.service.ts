import { Injectable, Inject, PLATFORM_ID, Injector, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class WindowRefService {
    private _window: Window;
    constructor(@Inject(PLATFORM_ID) platformId, private injector: Injector) {
        if (!isPlatformBrowser(platformId)) {
              this._window = {navigator: {userAgent: 'fakeAgent'}} as Window;
        } else {
            this._window = window;
        }
    }

    get nativeWindow(): any {
        return this._window;
    }
}

export const WindowToken = new InjectionToken('Window');