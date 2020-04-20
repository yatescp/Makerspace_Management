import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule,
  SkyIconModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule, SkyToolbarModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyDatepickerModule,
  SkyTimepickerModule
} from '@skyux/datetime';

import {
  SkyPopoverModule
} from '@skyux/popovers';

import {
  SkyModalModule, SkyConfirmModule
} from '@skyux/modals';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyGridModule
} from '@skyux/grids';

import {
  SkyPagingModule
} from '@skyux/lists';

import {
  DatePipe
} from '@angular/common';

@NgModule({
  providers: [DatePipe],
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyToolbarModule,
    SkyNavbarModule,
    SkyDatepickerModule,
    SkyPopoverModule,
    SkyModalModule,
    SkyConfirmModule,
    SkyCheckboxModule,
    SkyGridModule,
    SkyTimepickerModule,
    SkyPagingModule,
    SkyIconModule
  ]
})
export class AppSkyModule { }
