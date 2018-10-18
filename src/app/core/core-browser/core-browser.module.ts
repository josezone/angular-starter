import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './ensureModuleLoadedOnceGuard';
import { ReportingErrorService } from '../services/reporting-error.service'; 

@NgModule({
  imports: [
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    { provide: ErrorHandler, useClass: ReportingErrorService }
  ]
})
export class CoreBrowserModule  extends EnsureModuleLoadedOnceGuard{
  constructor(@Optional() @SkipSelf() parentModule: CoreBrowserModule) {
    super(parentModule);
  }
 }

