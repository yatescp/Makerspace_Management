import {
  Component
} from '@angular/core';

import {
  SkyPopoverMessage,
  SkyPopoverMessageType
} from '@skyux/popovers';

import {
  Subject
} from 'rxjs/Subject';

@Component({
  selector: 'time-block',
  templateUrl: './time-block.component.html'
})


export class TimeBlockComponent {

  public popoverController = new Subject<SkyPopoverMessage>();

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

  //document.getElementById("time_block").onclick = this.openPopover;
  
}