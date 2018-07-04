import { GlobalService } from './../../shared/global.service';
import { ApiService } from './../../shared/api.service';
import { EventOperation, Attendant } from './../operation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface OperationSlot {
    user_id: number;
    name: string;
    active: boolean;
    lecture: boolean;
    timeSlot: {
      start: string;
      end: string;
    };
    paidOnline: number;
    paidOnsite: number;
    paidTotal: number;
    note: string;
}

@Component({
  selector: 'app-event-operation',
  templateUrl: './event-operation.component.html',
  styleUrls: ['./event-operation.component.css']
})

export class EventOperationComponent implements OnInit {

  public event: EventOperation;
  public event_id: string;

  public operation: Array<OperationSlot>;

  constructor(
    private api: ApiService,
    private gs: GlobalService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      this.event_id = params.get('id');
    })
  }

  ngOnInit() {
    this.api.get('operation' /*+ this.event_id */).subscribe((res: any) => {
      this.event = res;
      this.operation = this.toOperation(this.event.operation);
    }, err => {
      console.error('operation get err');
    })
  }

  //convert from event data we get from backend into operatable timeslot-based table
  toOperation(attendants: Array<Attendant>): Array<OperationSlot> {
    let operation: Array<OperationSlot> = [];
    attendants.forEach(attendant => {
      attendant.timeSlots.forEach(aSlot => {
        let slot: OperationSlot = {
          user_id: attendant.user_id,
          name: attendant.name,
          active: attendant.active,
          lecture: attendant.lecture,
          timeSlot: {
            start: aSlot.start,
            end: aSlot.end
          },
          paidOnline: attendant.paidOnline,
          paidOnsite: attendant.paidOnsite,
          paidTotal: attendant.paidOnline + attendant.paidOnsite,
          note: attendant.note
        };
        operation.push(slot);
      })      
    })
    return operation;
  }

  //convert from operatable timeslot-based table to the event we can send to the backend
  fromOperation(operation: Array<OperationSlot>): Array<Attendant> {
    let attendants: Array<Attendant> = [];
    operation.forEach(oSlot => {
      let id = attendants.findIndex(attendant => attendant.user_id == oSlot.user_id);
      let attendant: Attendant = {
        name: oSlot.name,
        user_id: oSlot.user_id,
        timeSlots: [{
          start: oSlot.timeSlot.start,
          end: oSlot.timeSlot.end,
          active: oSlot.active
        }],
        active: oSlot.active,
        lecture: oSlot.lecture,
        paidOnline: oSlot.paidOnline,
        paidOnsite: oSlot.paidOnsite,
        note: oSlot.note
      };
      if(id != -1) attendants.push(attendant);
      else {
        attendants[id].timeSlots.push({
          active: oSlot.active,
          start: oSlot.timeSlot.start,
          end: oSlot.timeSlot.end
        });
        attendants[id].lecture = oSlot.lecture;
        attendants[id].paidOnline = oSlot.paidOnline;
        attendants[id].paidOnsite = oSlot.paidOnsite;
        attendants[id].note = oSlot.note;
      }
    })
    return attendants;
  }

  //call this method every time user does something 
  updateOperation(operation: Array<OperationSlot> = this.operation) {
    this.event.operation = this.fromOperation(operation);
    
    this.api.put('operation', this.event_id, this.event).subscribe(res => {
      console.log('operation updated!', res);
    }, err => {
      console.error('error putUpdate', err);
    });

    //to keep up the data-binding
    this.operation = this.toOperation(this.event.operation);
  }

}
