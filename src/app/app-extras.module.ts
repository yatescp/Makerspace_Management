import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import {
  SkyAuthHttpModule
} from '@skyux/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [
    AppSkyModule,
    SkyAuthHttpModule
  ]
})

export class AppExtrasModule { }
