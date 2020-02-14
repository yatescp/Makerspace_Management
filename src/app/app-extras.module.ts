import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyAuthHttpModule
} from '@skyux/http';

@NgModule({
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ]
  
})

export class AppExtrasModule { }
