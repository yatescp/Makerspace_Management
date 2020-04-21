import { Component } from '@angular/core';

import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';

import { SkyModalContext } from './modal-context';

import { SkyModalFormComponent } from './modal-form.component';

@Component({
  selector: 'sky-edit-modal-launcher',
  templateUrl: './edit-modal-launcher.component.html'
})
export class SkyModalComponent {
  constructor(private modal: SkyModalService) { }

  public openModal() {
    let context = new SkyModalContext();
    context.name = 'GOAT';
    context.id = '1'; // placeholder values

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
