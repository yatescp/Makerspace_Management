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
  SkyModalModule
} from '@skyux/modals';

import {
  SkyConfirmModule
} from '@skyux/modals';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyGridModule
} from '@skyux/grids';

@NgModule({
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
    SkyTimepickerModule
  ]
})
export class AppSkyModule { }
