import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyAuthHttpModule
} from '@skyux/http';

import { 
  SkyModalDemoFormComponent 
} from './modal/modal-demo-form.component';

@NgModule({
  providers: [],
  entryComponents: [
    SkyModalDemoFormComponent
  ],
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ]
  
})

export class AppExtrasModule { }
