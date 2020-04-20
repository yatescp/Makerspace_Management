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
  public data = [
    {id: '12A', time: '12:00AM'},
    {id: '1A', time: '1:00AM'},
    {id: '2A', time: '2:00AM'},
    {id: '3A', time: '3:00AM'},
    {id: '4A', time: '4:00AM'},
    {id: '5A', time: '5:00AM'},
    {id: '6A', time: '6:00AM'},
    {id: '7A', time: '7:00AM'},
    {id: '8A', time: '8:00AM'},
    {id: '9A', time: '9:00AM'},
    {id: '10A', time: '10:00AM'},
    {id: '11A', time: '11:00AM'},
    {id: '12P', time: '12:00PM'},
    {id: '1p', time: '1:00PM'},
    {id: '2P', time: '2:00PM'},
    {id: '3P', time: '3:00PM'},
    {id: '4P', time: '4:00PM'},
    {id: '5P', time: '5:00PM'},
    {id: '6P', time: '6:00PM'},
    {id: '7P', time: '7:00PM'},
    {id: '8P', time: '8:00PM'},
    {id: '9P', time: '9:00PM'},
    {id: '10P', time: '10:00PM'},
    {id: '11P', time: '11:00PM'}
];

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
    let entry: any = [this.context.name, this.selectedStation, this.date, this.selectedStart, this.selectedEnd];
    this.context.bookings.push(entry);
    this.instance.close('saved');
  }
}
