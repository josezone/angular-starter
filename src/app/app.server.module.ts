import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreServerModule } from './core/core-server/core-server.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    CoreServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
