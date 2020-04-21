import {
  Component,
  OnInit
} from '@angular/core';

import {
  DatePipe
} from '@angular/common';

import {
  SkyGridMessage,
  SkyGridSelectedRowsModelChange
} from '@skyux/grids';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  Subject
} from 'rxjs/Subject';

import { Booking } from './models/booking';

import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';

import { SkyModalContext } from './modal/modal-context';

import { SkyModalFormComponent } from './modal/modal-form.component';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home-component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  public date = new Date();
  public month = this.date.getMonth();
  public number = this.date.getDate();
  public year = this.date.getFullYear();
  public theDate = new Date(this.year, this.month, this.number);
  public entry: Booking;
  public data = [
    { id: '0', station: '' },
    { id: '1', station: 'Laser cutter' },
    { id: '2', station: 'Creator Pro - 3D printer 1' },
    { id: '3', station: 'Creator Pro - 3D printer 2' },
    { id: '4', station: 'Soldering' },
    { id: '5', station: 'Drill press' },
    { id: '6', station: 'VR/AR' }
  ];

  public bookings = [
    {
      id: '0',
      title: 'Laser Cutter Booking',
      date: '04/20/20',
      start: '12:00',
      end: '01:00',
      name: 'Steven Draugel',
      station: 'Laser cutter'
    },
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];

  public dataForMultiselect = this.data.slice(0);

  public asyncHeading = new BehaviorSubject<string>('');

  public selectedRows: string;

  public gridController = new Subject<SkyGridMessage>();

  constructor(private modal: SkyModalService) { }

  public ngOnInit() {
    // // Simulate async request:
    // setTimeout(() => {
    //   this.asyncHeading.next('Amount');
    // }, 1000);
  }

  public goBack(event: any): void {
    this.theDate = new Date(this.year, this.month, this.number - 1);
  }

  public goForward(event: any): void {
    this.theDate = new Date(this.year, this.month, this.number + 1);
  }

  public today(event: any): void {
    this.theDate = new Date(this.year, this.month, this.number);
  }

  public onMultiselectSelectionChange(value: SkyGridSelectedRowsModelChange) {
    this.selectedRows = value.selectedRowIds.toString();
  }

  public getBooking(id: string, row: any): Booking {
    console.log(id);
    return new Booking(
      '0',
      'Laser Cutter Booking',
      '04/20/20',
      '12:00',
      '01:00',
      'Steven Draugel',
      'Laser cutter'
    );
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
          provide: SkyModalContext, useValue: context}
      ]
    });

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
      this.entry = result.data;
      console.log(this.entry);
    });
  }
}
