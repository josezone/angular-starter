import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreBrowserModule } from './core/core-browser/core-browser.module';
import 'hammerjs';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserTransferStateModule,
        CoreBrowserModule
    ]
})
export class AppBrowserModule {}