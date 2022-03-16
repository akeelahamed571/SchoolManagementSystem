import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { Student } from './student';

@Injectable({
    providedIn: 'root'
  })
  
  export class Studentservice {
    private  apiServerUrl=environment.apiBaseUrl;
  
    constructor(private http:HttpClient) { }
  
  
    public getAllStudents():Observable<Student[]>{
      return this.http.get<Student[]>(`${this.apiServerUrl}/result/allstudents`);
    }
  
  
  
  
  
  
  
  
  
  }