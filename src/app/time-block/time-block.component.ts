import {
  Component, OnInit
} from '@angular/core';

import {
  SkyPopoverMessage,
  SkyPopoverMessageType
} from '@skyux/popovers';

import {
  Subject
} from 'rxjs/Subject';
import { TimeBlockContext } from './time-block-context';

@Component({
  selector: 'time-block',
  templateUrl: './time-block.component.html'
})

export class TimeBlockComponent implements OnInit {
  public popoverController = new Subject<SkyPopoverMessage>();
  public name = '';

  constructor(public context: TimeBlockContext) {
    // this.name = context.booking.user;
  }

  public ngOnInit() {
    this.name = 'Steven Draugel';
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
