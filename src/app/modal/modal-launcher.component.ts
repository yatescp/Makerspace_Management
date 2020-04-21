import { Component } from '@angular/core';

import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';

import { SkyModalContext } from './modal-context';

import { SkyModalFormComponent } from './modal-form.component';

@Component({
  selector: 'sky-modal-launcher',
  templateUrl: './modal-launcher.component.html'
})
export class SkyModalComponent {
  constructor(private modal: SkyModalService) { }

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
          provide: SkyModalContext, useValue: context}
      ]
    });

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }
}
