import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from './result';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private  apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getResults():Observable<Result[]>{
    return this.http.get<Result[]>(`${this.apiServerUrl}/result/all`);
  }

  //classvice results
  public getClassViceResults(classid:string):Observable<Result[]>{
    return this.http.get<Result[]>(`${this.apiServerUrl}/result/classvice/${classid}`);
  }


  public addResults(result:Result):Observable<Result>{
    
    return this.http.post<Result>(`${this.apiServerUrl}/result/add`,result);
  }

  public updateResults(result:Result):Observable<Result>{
    return this.http.put<Result>(`${this.apiServerUrl}/result/update`,result);
  }

  public deleteResults(resultid:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/result/delete/${resultid}`);
  }


  public getStudentResult(studentId: string): Observable<Result[]>{
    return this.http.get<Result[]>(`${this.apiServerUrl}/result/find/${studentId}`);
  }
}
