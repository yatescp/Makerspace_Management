export class Booking {
  public title: string;
  public date: string;
  public startTime: string;
  public endTime: string;
  public user: string;
  public station: string;

  constructor(_title: string, _data: string, _startTime: string, _endTime: string, _user: string, _station: string) {
    this.title = _title;
    this.date = _data;
    this.startTime = _startTime;
    this.endTime = _endTime;
    this.user = _user;
    this.station = _station;
  }
}
