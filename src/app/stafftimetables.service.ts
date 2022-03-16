import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { stafftimetable } from './stafftimetable';
import { Stafftimetables } from './stafftimetables';
@Injectable({
  providedIn: 'root'
})

export class Stafftimetablesservice {
  private  apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }


  public allstaffTimetables():Observable<Stafftimetables[]>{
    return this.http.get<Stafftimetables[]>(`${this.apiServerUrl}/result/allstaffTimetables`);
  }









}