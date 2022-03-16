import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grade } from './grade';
import { environment } from 'src/environments/environment.prod';


import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })

  export class  Gradeservice{

    private  apiServerUrl=environment.apiBaseUrl;

    constructor(private http:HttpClient) { }
  

public  GradeBystaffid(staffid:string):Observable<Grade[]>{
   

    
    return this.http.get<Grade[]>(`${this.apiServerUrl}/result/findstaff/${staffid}`);
  }

  
public getGrades():Observable<Grade[]>{
    return this.http.get<Grade[]>(`${this.apiServerUrl}/result/allgrades`);
  }



  }