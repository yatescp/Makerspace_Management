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
  entryComponents: [
    SkyModalFormComponent
  ],
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ],
  providers: [
  ]

})

export class AppExtrasModule { }
