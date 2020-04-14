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

  public openModal() {
    let context = new SkyModalContext();
    context.value1 = 'Default text';

    let modalInstance = this.modal.open(SkyModalFormComponent, {
      providers: [
        {
          provide: SkyModalContext, useValue: context
        }
      ]
    });

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
    });
  }
}
