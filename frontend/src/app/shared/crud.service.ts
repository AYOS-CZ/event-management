import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor(
    private api: ApiService
  ) { 
    this.api = api;
  }

  create(type: string, data: any) {
    return this.api.post(type, data);
  }

  update(type: string, id: string, data: any) {
    return this.api.put(type, id, data);
  }

  getList(type: string) {
    return this.api.get(type);
  }

  getOne(type: string, id: string) {
    return this.api.get(type + '/' + id);
  }

  delete(type: string, id: string) {
    return this.api.delete(type, id);
  }
}
