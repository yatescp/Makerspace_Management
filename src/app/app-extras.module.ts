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
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SkyModalFormComponent } from './modal/modal-form.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
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
