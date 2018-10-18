import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';

@NgModule({
  imports: [    
  ],
  exports: [
  ],
  declarations: [
  ]
})
export class CoreModule  extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
 }

