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
  public reactiveForm: FormGroup;
  public disabled = false;
  public dateFormat = 'MM/DD/YYYY';
  public maxDate: Date;
  public minDate: Date;
  public selectedDate = '04/17/2020';

  public get startTime(): FormControl {
    return this.startTimeForm.get('time') as FormControl;
  }
  public get endTime(): FormControl {
    return this.endTimeForm.get('time') as FormControl;
  }
  public get reactiveDate(): FormControl {
    return this.reactiveForm.get('selectedDate') as FormControl;
  }
  constructor(public context: SkyModalContext, public instance: SkyModalInstance, private formBuilder: FormBuilder) { }
  public ngOnInit(): void {
    this.startTimeForm = this.formBuilder.group({
      time: new FormControl('', Validators.required)
    });
    this.endTimeForm = this.formBuilder.group({
      time: new FormControl('', Validators.required)
    });
    this.reactiveForm = this.formBuilder.group({
      selectedDate: new FormControl(this.selectedDate, Validators.required)
    });
  }
  public formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString();
  }
  public resetDates(): void {
    this.selectedDate = undefined;
    this.reactiveDate.setValue(undefined);
  }
  public clearSelectedTimes() {
    this.startTime.setValue(undefined);
    this.endTime.setValue(undefined);
  }
}
