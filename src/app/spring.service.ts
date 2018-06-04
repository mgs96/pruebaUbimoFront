import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  url = 'http://localhost:8080/table'

  constructor(
    private http: HttpClient
  ) { }

  sendData(data) {
    return this.http.post(this.url, data);
  }
}
