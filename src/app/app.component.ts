import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Result } from './result';
import { ResultService } from './result.service';
import { NgForm } from '@angular/forms';
import * as internal from 'assert';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
 
 
 
  /* public results:Result[];
  public editResult: Result;
  public deleteResult: Result;
  //statusClass used to identify whether  classId clicked or not
  public  statusClass:  Result[];
  //used to identify admin panel showed or not
  public  statusStudentPanel:boolean=false;

  
 
  constructor(private resultService:ResultService,private router: Router) { }

  ngOnInit(){
    
    this.getResults();
   //this.getClassViceResults();
  }
  //show adminPanel starthere
  public getStudentPanel():void{
    this.statusStudentPanel=true;
  }
 
  //get all results
  public getResults():void {
    this.resultService.getResults().subscribe(
      (response:Result[])=>{
      this.results=response;
       },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  

  

  public onAddResult(addForm: NgForm): void {
    document.getElementById('add-result-form').click();
    this.resultService.addResults(addForm.value).subscribe(
      (response: Result) => {
        console.log(response);
        this.getResults();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        alert('retry again');
        addForm.reset();
      }
    );
  }

  public onUpdateResult(result: Result): void {
    this.resultService.updateResults(result).subscribe(
      (response: Result) => {
        console.log(response);
        this.getResults();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onDeleteResult(resultid: number): void {
    this.resultService.deleteResults(resultid).subscribe(
      (response: void) => {
        console.log(response);
        this.getResults();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

// admin result search coding done 
  public searchResults(key: string): void {
    console.log(key);
    const results1: Result[] = [];
    for (const result of this.results) {
      if (result.studentId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.classId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.medium.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||result.term.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.subject.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results1.push(result);
      }
    }
    this.results = results1;
    if (results1.length === 0 || !key) {
      //check agin here
      this.getResults();
    }
  }







  
  //class Vice results ok  
  public getClassViceResults(key: string):void {
    
    console.log(key);
    const results1: Result[] = [];
    
    for (const result of this.results) {
      if ( result.classId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        this.statusClass=results1;
        results1.push(result);
      }
    }
    this.results = results1;
    if (results1.length === 0 || !key) {
       
       this.getResults();
    }
  }

  public onOpenModals(result:Result,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='add'){
      button.setAttribute('data-target','#addResultModal');
    }
    
    if(mode==='edit'){
      this.editResult=result;
      button.setAttribute('data-target','#updateResultModal');
    }

    if(mode==='delete'){
      this.deleteResult = result;
      button.setAttribute('data-target','#deleteResultModal');
    }
    container.appendChild(button);
    button.click();

  }
  


*/
}
