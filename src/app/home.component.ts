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
  ListSortFieldSelectorModel
} from '@skyux/list-builder-common';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  Subject
} from 'rxjs/Subject';
import { Booking } from './models/booking';

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

  public onSortChangeForGrid(activeSort: ListSortFieldSelectorModel) {
    this.data = this.sortGridData(activeSort, this.data);
  }

  public onSortChangeForMultiselectGrid(activeSort: ListSortFieldSelectorModel) {
    this.dataForMultiselect = this.sortGridData(activeSort, this.dataForMultiselect);
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

  private sortGridData(activeSort: ListSortFieldSelectorModel, data: any[]) {
    const sortField = activeSort.fieldSelector;
    const descending = activeSort.descending;

    return data.sort((a: any, b: any) => {
      let value1 = a[sortField];
      let value2 = b[sortField];

      if (value1 && typeof value1 === 'string') {
        value1 = value1.toLowerCase();
      }

      if (value2 && typeof value2 === 'string') {
        value2 = value2.toLowerCase();
      }

      if (value1 === value2) {
        return 0;
      }

      let result = value1 > value2 ? 1 : -1;

      if (descending) {
        result *= -1;
      }

      return result;
    }).slice();
  }
}
