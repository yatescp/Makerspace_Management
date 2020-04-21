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

import { SkyModalCloseArgs, SkyModalService } from '@skyux/modals';

import { SkyModalContext } from '../modal/modal-context';

import { SkyModalFormComponent } from '../modal/modal-form.component';
@Component({
  selector: 'time-block',
  templateUrl: './time-block.component.html'
})

export class TimeBlockComponent implements OnInit {

  @Input()
  public booking: Booking;

  public popoverController = new Subject<SkyPopoverMessage>();

  constructor(private modal: SkyModalService) {
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
  public openModal(id: string, date: string, start: string, end: string, name: string, station: string) {
    let context = new SkyModalContext();
    context.name = name;
    context.date = date;
    context.start = start;
    context.end = end;
    context.id = id;
    context.station = station;
    context.entry = new Booking(id, 'idk', date, start, end, name, station);
    // placeholder values

    let modalInstance = this.modal.open(SkyModalFormComponent, {

      providers: [
        {
          provide: SkyModalContext, useValue: context
        }
      ]
    });

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
      //this.entry = result.data;
      // tslint:disable-next-line: max-line-length
      //this.makeBooking(this.entry.id, this.entry.title, this.entry.date, this.entry.startTime, this.entry.endTime, this.entry.name, this.entry.station);
      // test
      // console.log(this.entry);
    });
  }
  private sendMessage(type: SkyPopoverMessageType): void {
    const message: SkyPopoverMessage = { type };
    this.popoverController.next(message);
  }
}
