import {
  Component, OnInit, Input
} from '@angular/core';

import {
  SkyPopoverMessage,
  SkyPopoverMessageType
} from '@skyux/popovers';

import {
  Subject
} from 'rxjs/Subject';
import { Booking } from '../models/booking';

@Component({
  selector: 'time-block',
  templateUrl: './time-block.component.html'
})

export class TimeBlockComponent implements OnInit {

  @Input()
  public booking: Booking;

  public popoverController = new Subject<SkyPopoverMessage>();

  constructor() {
    // this.name = context.booking.user;
  }

  public ngOnInit() {

  }
  public openPopover(): void {
    this.sendMessage(SkyPopoverMessageType.Open);
  }

  public closePopover(): void {
    this.sendMessage(SkyPopoverMessageType.Close);
  }

  private sendMessage(type: SkyPopoverMessageType): void {
    const message: SkyPopoverMessage = { type };
    this.popoverController.next(message);
  }
}
