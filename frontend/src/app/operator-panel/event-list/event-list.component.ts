import { GlobalService } from './../../shared/global.service';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListOperatorComponent implements OnInit {

  public events = [];

  constructor(
    private api: ApiService,
    private gs: GlobalService
  ) { 
    console.log('myeventsoperation');
  }

  ngOnInit() {
    console.log('myeventsoperation');
    this.api.get('myEventsOperator').subscribe((res: any) => {
      console.log('myEventsOperator', res);
      this.events = res.events;
    }, err => {
      console.error('myEventsOperator err', err);
    });
  }

}
