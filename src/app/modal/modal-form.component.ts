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

const moment = require('moment');

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
  public dateFormat = 'MM/DD/YYYY';
  public selectedStart: any;
  public selectedEnd: any;
  public selectedStation: any;
  public date = this.context.date;
  public todayDate = new moment(this.date);
  public timeNow = this.todayDate.format('HH:mm');
  public maxDate: Date;
  public minDate: Date;

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
      time: new FormControl(this.timeNow, Validators.required)
    });
    this.endTimeForm = this.formBuilder.group({
      time: new FormControl('', Validators.required)
    });
    this.reactiveForm = this.formBuilder.group({
      selectedDate: new FormControl(this.todayDate.format(this.dateFormat), Validators.required)
    });
  }
  public formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString();
  }
  public resetDates(): void {
    this.date = undefined;
    this.reactiveDate.setValue(undefined);
  }
  public clearSelectedTimes() {
    this.startTime.setValue(undefined);
    this.endTime.setValue(undefined);
    this.selectedEnd = undefined;
    this.selectedEnd = undefined;
  }
  public save() {
    let entry: any = ['name: GOAT', this.selectedStation, this.date, this.selectedStart, this.selectedEnd];
    this.context.bookings.append(entry);
    this.instance.close('saved');
  }
}
