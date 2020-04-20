export class Booking {
  public id: string;
  public title: string;
  public date: string;
  public startTime: string;
  public endTime: string;
  public name: string;
  public station: string;

  constructor(_id: string, _title: string, _data: string, _startTime: string, _endTime: string, _name: string, _station: string) {
    this.title = _title;
    this.date = _data;
    this.startTime = _startTime;
    this.endTime = _endTime;
    this.name = _name;
    this.station = _station;
  }
}
