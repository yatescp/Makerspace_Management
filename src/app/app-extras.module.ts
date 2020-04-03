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
  SkyModalFormComponent
} from './modal/modal-form.component';

@NgModule({
  providers: [],
  entryComponents: [
    SkyModalFormComponent,
  ],
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ]
})

export class AppExtrasModule { }
