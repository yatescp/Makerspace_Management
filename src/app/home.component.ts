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

  public bookings: Booking[] = [
    {
     id :'6',
     title: 'Soldering Booking',
     date: '04/20/20',
     startTime: '01:00',
     endTime: '02:00',
     name: 'Steven Draugel',
     station: 'Soldering'
    },
    {
     id :'2',
     title: 'Laser Cutter Booking',
     date: '04/20/20',
     startTime: '12:00',
     endTime: '01:00',
     name: 'Steven Draugel',
     station: 'Laser cutter'
    },
    {
     id :'3',
     title: 'Drill press',
     date: '04/20/20',
     startTime: '02:00',
     endTime: '03:00',
     name: 'Steven Draugel',
     station: 'Drill press'
    }
  ];  

  public data = [
    { id: '1', station: 'Laser cutter' },
    { id: '2', station: 'Creator Pro - 3D printer 1' },
    { id: '3', station: 'Creator Pro - 3D printer 2' },
    { id: '4', station: 'Soldering' },
    { id: '5', station: 'Drill press' },
    { id: '6', station: 'VR/AR' }
  ];

  
  //I know, its ugly, but it works. Each element is a station row, each number is a time column. This matrix defines the bookings that populate
  //the grid, '0' means no booking, the getBooking method will return null if '0' is passed, which causes time-block to turn blank
  public timeBlocks = [

    //Laser Cutter id = '0'
    {
      id: '0', _00: '2', _01: '0', _02: '0', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    },

    //Creator Pro - 3D printer 1 = '1'
    {
      id: '1', _00: '0', _01: '0', _02: '0', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    },

    //Creator Pro - 3D printer 2 = '2'
    {
      id: '2', _00: '0', _01: '0', _02: '0', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    },

    //Soldering = '3'
    {
      id: '3', _00: '0', _01: '6', _02: '0', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    },

    //Drill press = '4'
    {
      id: '4', _00: '0', _01: '0', _02: '3', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    },

    //VR/AR = '5'
    {
      id: '5', _00: '0', _01: '0', _02: '0', _03: '0', _04: '0', _05: '0', _06: '0', _07: '0', _08: '0', _09: '0', _10: '0', _11: '0',
      _12: '0', _13: '0', _14: '0', _15: '0', _16: '0', _17: '0', _18: '0', _19: '0', _20: '0', _21: '0', _22: '0', _23: '0'
    }
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

  public getBooking(id: string): Booking {

    
        
    if (id == '0'){
      return null;
    }

    for(var i = 0; i < this.bookings.length; i++){
      if (this.bookings[i].id == id) {
        return this.bookings[i];
        }
    }

    return null;
  }

  public makeBooking(_id: string, _title: string, _data: string, _startTime: string, _endTime: string, _name: string, _station: string){
      
    //make new booking
    let booking = new Booking(_id, _title, _data, _startTime, _endTime, _name, _station);

    //id will come from database, so for now it can be hardcoded or generated by the index
    if (booking.id === '-1'){
      booking.id = this.bookings.length.toString();
    }
    
    
    this.bookings[this.bookings.length] = booking;

    //Hardcoded
    //booking = new Booking("1", "GOAT Laver cutter", '04/21/2020', "16:00", "17:00", "GOAT", "Laser cutter");

    this.addBookingToGrid(booking);

  }

  public addBookingToGrid(_booking: Booking){

    //hardcoded booking: '1','04/21/2020','4:00 PM','5:00 PM', 'GOAT', 'Laser Cutter'
    //this.timeBlocks[0]["_16"] = booking.id.toString();
    //return;

    let booking = _booking;

    //station id defaults to Laser cutter
    let stationId = 1;

    //iterates through data to match the station name with its id
    for (var i = 1; i < this.data.length; i++){
      if (this.data[i].station === booking.station){
          stationId = i;
      }
    }

    //separate the hour, the time must be military time with 2 significant digits for the hours
    let splitTime= booking.startTime.toString().split(":", 1)

    //adds the underscore, this would be easier if typescript let us name properties with just numbers
    let slot = "_" + splitTime[0]

    console.log("timeBlock from " + booking.startTime.toString() + " = " + slot);

    //This works with string constants, so there must be a way to force it to work with string variables
    this.timeBlocks[stationId][slot] = booking.id.toString();


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
