import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  declarations: [
  LayoutComponent]
})
export class CoreModule  extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
 }

