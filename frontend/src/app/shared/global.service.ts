import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  filterTable(table: any, value: string, searchIn = null) {

    console.log('filterTable', table, value);
    return table.filter(row => {
      console.log('filter row', row);
      for (const key in row) {
        console.log('for key', key, row[key]);
        let col = row[key];
        if (searchIn)
          if (row[key].toLowerCase().indexOf(value.toLowerCase()) != -1) {
            return row;
          }
      }
    })

  }

  today(date: number) {

    var dateObj = new Date(date);
    var todayObj = new Date;
    console.log('today', dateObj.toDateString(), todayObj.toDateString());
    return (todayObj.toDateString() === dateObj.toDateString());
  }
}
