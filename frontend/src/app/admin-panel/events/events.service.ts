import { ApiService } from './../../shared/api.service';
import { CrudService } from './../../shared/crud.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService extends CrudService {

  constructor(
    api: ApiService
  ) { 
    super(api);
  }
}
