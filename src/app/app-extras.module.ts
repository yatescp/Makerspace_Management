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
import { TimeBlockContext } from './time-block/time-block-context';

@NgModule({
  entryComponents: [
    SkyModalFormComponent
  ],
  imports: [
  ],
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ], providers: [
    TimeBlockContext
  ]

})

export class AppExtrasModule { }
