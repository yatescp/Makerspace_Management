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
  
  @Component({
    selector: 'sky-timepicker-demo',
    templateUrl: './timepicker-demo.component.html'
  })
  export class SkyTimepickerDemoComponent implements OnInit {
    public format12 = 'hh';
    public format24 = 'HH';
    public returnFormat = 'HH:mm:ssZ';
    public startTimeForm: FormGroup;
    public endTimeForm: FormGroup;
  
    public get startTime(): FormControl {
      return this.startTimeForm.get('time') as FormControl;
    }
    public get endTime(): FormControl {
        return this.endTimeForm.get('time') as FormControl;
      }
  
    constructor(
      private formBuilder: FormBuilder
    ) { }
  
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