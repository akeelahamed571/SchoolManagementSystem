import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { stafftimetable } from './stafftimetable';
@Injectable({
  providedIn: 'root'
})

export class Stafftimetableservice {
  private  apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }


  public getStaffSubjects():Observable<stafftimetable[]>{
    return this.http.get<stafftimetable[]>(`${this.apiServerUrl}/result/allstaffsubjects`);
  }









}