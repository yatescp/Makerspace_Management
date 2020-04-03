import { Component } from '@angular/core';

import { SkyModalInstance } from '@skyux/modals';

import { SkyModalContext } from './modal-context';

@Component({
  selector: 'sky-modal-form',
  templateUrl: './modal-form.component.html'
})
export class SkyModalFormComponent {
  public title = 'Reserve a Station';

  constructor(public context: SkyModalContext, public instance: SkyModalInstance) { }
}