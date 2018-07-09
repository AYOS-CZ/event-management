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
  timeSlot: string;
  paidOnline: number;
  paidOnsite: number;
  paidTotal: number;
  note: string;
}

interface OperationTotal {
  expectedAttendance?: number;
  actualAttendance?: number;
  expectedPaid?: number;
  actualPaid?: number;
  expectedSessions?: number;
  actualSessions?: number;
}

@Component({
  selector: 'app-event-operation',
  templateUrl: './event-operation.component.html',
  styleUrls: ['./event-operation.component.scss']
})

export class EventOperationComponent implements OnInit {

  public event: EventOperation;
  public event_id: string;

  public userIterator: number = 1;

  public operation: Array<OperationSlot>;

  public timeslotTable = [];

  public edit = { table: null, id: null };

  public total: OperationTotal = {};

  rowGroupMetadata: any;

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
      this.prepareAttendants(res.operation);
      // this.operation = this.toOperation(this.event.operation);
      this.formTimeslotsTable(res, this.operation);
      this.calculateTotal();
    }, err => {
      console.error('operation get err');
    })

  }

  prepareAttendants(operation: Array<Attendant>) {
    operation.forEach(attendant => {
      attendant.paidTotal = attendant.paidOnline + attendant.paidOnsite;
    })
  }


  addZeros(val: number): string {
    if (val >= 0 && val < 10) return '0' + val;
    else return val.toString();
  }

  activeChange(attendant: Attendant) {
    setTimeout(() => this.calculateTotal(), 50);
  }

  formTimeslotsTable(event: EventOperation, operation: Array<OperationSlot>) {
    let startTime = event.subEvents.healing.start;
    let length = event.subEvents.healing.sessionLength;
    let breakLength = event.subEvents.healing.breakLength;
    let endTime = event.subEvents.healing.end;

    let startArr = startTime.split(':');
    let endArr = endTime.split(':');

    //iterateable variable from event start to event end
    let eventDate = new Date();
    eventDate.setHours(parseInt(startArr[0]));
    eventDate.setMinutes(parseInt(startArr[1]));

    //when event ends
    let endDate = new Date();
    endDate.setHours(parseInt(endArr[0]));
    endDate.setMinutes(parseInt(endArr[1]));

    let overEnd = false;

    console.log(eventDate, endDate);

    //while eventDate variable is within event time range
    while (eventDate.getTime() < endDate.getTime()) {
      let slotTime = this.addZeros(eventDate.getHours()) + ':' + this.addZeros(eventDate.getMinutes());
      eventDate.setMinutes(eventDate.getMinutes() + length);
      slotTime += '-' + this.addZeros(eventDate.getHours()) + ':' + this.addZeros(eventDate.getMinutes());

      this.timeslotTable.push({
        time: slotTime
      });
      eventDate.setMinutes(eventDate.getMinutes() + breakLength);
    }
    this.updateAttendants(this.timeslotTable, this.event);
    console.log('timeslotTable', this.timeslotTable);
  }

  selectChanged(slot: string, timeSlotI: number, attendantI: number, tableI) {
    this.edit = { table: null, id: null };
    this.timeslotTable[tableI].attendants.push(this.event.operation[attendantI].user_id);
    this.event.operation[attendantI].timeSlots[timeSlotI] = {
      start: slot.split('-')[0],
      end: slot.split('-')[1]
    }
    this.updateAttendants(this.timeslotTable, this.event);
  }

  updateAttendants(slotTable, event: EventOperation) {
    slotTable.forEach((slot, i) => {
      slotTable[i].attendants = [];
      event.operation.forEach(attendant => {
        attendant.timeSlots.forEach(timeSlot => {
          if (timeSlot.start + '-' + timeSlot.end == slot.time) slotTable[i].attendants.push(attendant.user_id);
        })
      })
    })
  }

  calculateTotal() {
    this.total.expectedAttendance = this.event.operation.length;
    this.total.actualAttendance = this.event.operation.filter(attendant => attendant.active).length;
    
    let totalHealingBooked = 0;
    let totalLectureBooked = 0;
    let totalHealingAttended = 0; 
    let totalPaid = 0;

    this.event.operation.map(attendant => {
      totalHealingBooked += attendant.timeSlots.length;
      if (attendant.lecture) totalLectureBooked++;

      attendant.timeSlots.forEach(slot => {
        if(slot.active) totalHealingAttended++;
      })

      totalPaid += attendant.paidTotal;
    })
    this.total.expectedSessions = totalHealingBooked;
    
     
      
    
    
    this.total.actualSessions = totalHealingAttended;
    
    this.total.expectedPaid = totalHealingBooked * this.event.subEvents.healing.pricePerSession + totalLectureBooked * this.event.subEvents.lecture.price
    this.total.actualPaid = totalPaid;
  }

  paidChange(attendant: Attendant) {
    attendant.paidTotal = parseInt(attendant.paidOnline) + parseInt(attendant.paidOnsite);
    this.calculateTotal();
  }

  findIndex(id: number) {
    return this.event.operation.findIndex(attendant => {
      if (attendant.user_id == id) return true;
    })
  }

  findSlotIndex(timeSlots: any, slot: string) {
    return timeSlots.findIndex(_slot => {
      if (_slot.start + '-' + _slot.end == slot) return true;
    })
  }

  //call this method every time user does something 
  updateOperation(operation: Array<OperationSlot> = this.operation) {
    // this.event.operation = this.fromOperation(operation);
    // console.log('operation FIRST', this.operation);
    this.updateAttendants(this.timeslotTable, this.event);


    this.api.put('operation', this.event_id, this.event).subscribe(res => {
      // console.log('operation updated!', res);
    }, err => {
      console.error('error putUpdate', err);
    });

    //to keep up the data-binding
    // this.operation = this.toOperation(this.event.operation);
    // console.log('operation SECOND', this.operation);
  }

  addAttendant(timeSlot, tableI) {
    let attendant: Attendant = {
      name: "",
      user_id: -this.userIterator++,
      active: true,
      timeSlots: [{ start: timeSlot.time.split('-')[0], end: timeSlot.time.split('-')[1], active: true }],
      lecture: false,
      paidOnline: 0,
      paidOnsite: 0,
      note: 'Added on site'
    };

    this.event.operation.push(attendant);
    this.edit = {
      table: tableI,
      id: timeSlot.attendants.length
    }
    console.log('add attendant', attendant);
    this.updateOperation();
  }

  inputChange() {
    this.updateOperation();
    this.calculateTotal();
  }

  _edit(table, id) {
    this.edit.table = table;
    this.edit.id = id;
  }

  save(i) {
    this.calculateTotal();
    this.updateOperation();
    this.edit = { table: null, id: null };
  }

}
