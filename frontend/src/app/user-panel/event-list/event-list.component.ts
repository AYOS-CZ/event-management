import { GlobalService } from './../../shared/global.service';
import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListUserComponent implements OnInit {

  public search: string = "";
  public events = [];

  constructor(
    private api: ApiService,
    private gs: GlobalService
  ) { }

  getEvents() {
    this.api.get('myEventsUser').subscribe((res:any) => {
      console.log('api response: re', res);
      this.events = res.events;
    })
  }

  ngOnInit() {
    this.getEvents();
  }

  searchChanged(term) {
    this.events = this.filterTable(this.events, term);
  }

  filterTable(table: any, value: string) {

    console.log('filterTable', table, value);
    return table.filter(row => {
      row.searchActive = false;
      console.log('filter row', row);
      for (const key in row['meta']) {
        console.log('for key', key, row[key]);
        let col = row[key];
        
        if (typeof row['meta'][key] == 'string' && row['meta'][key].toLowerCase().indexOf(value.toLowerCase()) != -1) {
          row.searchActive = true;
          
        }
        return row;
      }
      for (const key in row['booking']) {
        console.log('for key', key, row[key]);
        let col = row[key];
        
        if (typeof row['booking'][key] == 'string' && row['booking'][key].toLowerCase().indexOf(value.toLowerCase()) != -1) {
          row.searchActive = true;
         
        }
        return row;
      }
    })
  }

}
