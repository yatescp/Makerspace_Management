import {
  TestBed
} from '@angular/core/testing';

import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';

import {
  expect
} from '@skyux-sdk/testing';

// Component we're going to test
import {
  TimeBlockComponent
} from './time-block.component';

// app modules
import {
  AppSkyModule
} from '../app-sky.module';

import {
  AppExtrasModule
} from '../app-extras.module';

describe('time-block component', () => {

  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SkyAppTestModule,
        AppSkyModule,
        AppExtrasModule
      ]
    });
  });

  it('should display a sky-alert', () => {
    const fixture = TestBed.createComponent(TimeBlockComponent);
    const alertEl = fixture.nativeElement.querySelector('sky-alert');

    // Using custom expect matchers
    expect(alertEl).toBeVisible();
    expect(alertEl).toHaveText(`You've just taken your first step into a larger world.`);
  });

});
