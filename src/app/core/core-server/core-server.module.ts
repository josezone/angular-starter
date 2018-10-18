import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { SwUpdate } from '@angular/service-worker';
import { SwUpdateServer } from './class/swUpdate-server.service';

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [],
  providers:[
    { provide: SwUpdate, useClass: SwUpdateServer }
  ]
})
export class CoreServerModule extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule: CoreServerModule) {
    super(parentModule);
  }
 }
