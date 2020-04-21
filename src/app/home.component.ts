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
      id: '2',
      title: 'Laser Cutter Booking',
      date: '04/20/20',
      startTime: '12:00',
      endTime: '01:00',
      name: 'Steven Draugel',
      station: 'Laser cutter'
    },
    {
      id: '3',
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

  public getBooking(id: string): Booking {



    if (id == '0') {
      return null;
    }

    for (var i = 0; i < this.bookings.length; i++) {
      if (this.bookings[i].id == id) {
        return this.bookings[i];
      }
    }

    return null;
  }

  public makeBooking(_id: string, _title: string, _data: string, _startTime: string, _endTime: string, _name: string, _station: string) {

    //make new booking
    let booking = new Booking(_id, _title, _data, _startTime, _endTime, _name, _station);

    //id will come from database, so for now it can be hardcoded or generated by the index
    if (booking.id === '-1') {
      booking.id = this.bookings.length.toString();
    }


    this.bookings[this.bookings.length] = booking;

    //Hardcoded
    //booking = new Booking("1", "GOAT Laver cutter", '04/21/2020', "16:00", "17:00", "GOAT", "Laser cutter");

    this.addBookingToGrid(booking);

  }

  public addBookingToGrid(_booking: Booking) {

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
    let splitTime= booking.startTime.split(":", 1)

    //adds the underscore, this would be easier if typescript let us name properties with just numbers
    let slot = "_" + splitTime[0]

    console.log("timeBlock from " + booking.startTime + " = " + slot);

    //This works with string constants, so there must be a way to force it to work with string variables
    //Edit: There isn't :(
    this.timeBlocks[stationId][slot] = booking.id;

    /*
    //Ungoldy Switch because the above code wouldnt work
    switch (slot) {
      case "_00": {
        this.timeBlocks[stationId]["_00"] = booking.id;
        break;
      }
      case "_01": {
        this.timeBlocks[stationId]["_01"] = booking.id;
        break;
      }
      case "_02": {
        this.timeBlocks[stationId]["_02"] = booking.id;
        break;
      }
      case "_03": {
        this.timeBlocks[stationId]["_03"] = booking.id;
        break;
      }
      case "_04": {
        this.timeBlocks[stationId]["_04"] = booking.id;
        break;
      }
      case "_05": {
        this.timeBlocks[stationId]["_05"] = booking.id;
        break;
      }
      case "_06": {
        this.timeBlocks[stationId]["_06"] = booking.id;
        break;
      }
      case "_07": {
        this.timeBlocks[stationId]["_07"] = booking.id;
        break;
      }
      case "_08": {
        this.timeBlocks[stationId]["_08"] = booking.id;
        break;
      }
      case "_09": {
        this.timeBlocks[stationId]["_09"] = booking.id;
        break;
      }
      case "_10": {
        this.timeBlocks[stationId]["_10"] = booking.id;
        break;
      }
      case "_11": {
        this.timeBlocks[stationId]["_11"] = booking.id;
        break;
      }
      case "_12": {
        this.timeBlocks[stationId]["_12"] = booking.id.;
        break;
      }
      case "_13": {
        this.timeBlocks[stationId]["_13"] = booking.id;
        break;
      }
      case "_14": {
        this.timeBlocks[stationId]["_14"] = booking.id;
        break;
      }
      case "_15": {
        this.timeBlocks[stationId]["_15"] = booking.id;
        break;
      }
      case "_16": {
        this.timeBlocks[stationId]["_16"] = booking.id;
        break;
      }
      case "_17": {
        this.timeBlocks[stationId]["_17"] = booking.id;
        break;
      }
      case "_18": {
        this.timeBlocks[stationId]["_18"] = booking.id;
        break;
      }
      case "_19": {
        this.timeBlocks[stationId]["_19"] = booking.id;
        break;
      }
      case "_20": {
        this.timeBlocks[stationId]["_20"] = booking.id;
        break;
      }
      case "_21": {
        this.timeBlocks[stationId]["_21"] = booking.id;
        break;
      }
      case "_22": {
        this.timeBlocks[stationId]["_22"] = booking.id;
        break;
      }
      case "_23": {
        this.timeBlocks[stationId]["_23"] = booking.id;
        break;
      }
      default: {
        this.timeBlocks[stationId]["_10"] = booking.id;
        break;
      }
    }
    */
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
          provide: SkyModalContext, useValue: context
        }
      ]
    });

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      console.log('Modal closed with reason: ' + result.reason + ' and data: ' + result.data);
      this.entry = result.data;
      // tslint:disable-next-line: max-line-length
      this.makeBooking(this.entry.id, this.entry.title, this.entry.date, this.entry.startTime, this.entry.endTime, this.entry.name, this.entry.station);
      // test
      // console.log(this.entry);
    });
  }
}
