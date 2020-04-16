import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { SkyModalInstance } from '@skyux/modals';

import { SkyModalContext } from './modal-context';

@Component({
  selector: 'sky-modal-form',
  templateUrl: './modal-form.component.html'
})
export class SkyModalFormComponent implements OnInit {
  public title = 'Reserve a Station';
  public startTimeForm: FormGroup;
  public endTimeForm: FormGroup;

  public get startTime(): FormControl {
    return this.startTimeForm.get('time') as FormControl;
  }
  public get endTime(): FormControl {
    return this.endTimeForm.get('time') as FormControl;
  }
  constructor(public context: SkyModalContext, public instance: SkyModalInstance, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.startTimeForm = this.formBuilder.group({
      time: new FormControl('2:45', Validators.required)
    });
    this.endTimeForm = this.formBuilder.group({
      time: new FormControl('2:45', Validators.required)
    });
  }

  public clearSelectedTimes() {
    this.startTime.setValue(undefined);
    this.endTime.setValue(undefined);
  }
}
