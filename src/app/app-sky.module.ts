import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyPopoverModule
} from '@skyux/popovers';
import { MakerspaceCalendarComponent } from './calendar/makerspace-calendar.component';

@NgModule({
  declarations: [MakerspaceCalendarComponent],
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyDatepickerModule,
    SkyPopoverModule,
    MakerspaceCalendarComponent
  ]
})
export class AppSkyModule { }
