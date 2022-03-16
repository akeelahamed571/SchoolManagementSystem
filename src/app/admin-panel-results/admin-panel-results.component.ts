
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../result.service';
import { Stafftimetableservice } from '../stafftimetable.service';
import { Stafftimetablesservice } from '../stafftimetables.service';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { stafftimetable } from '../stafftimetable';
import { Student } from '../student';
import { Studentservice } from '../student.service';
import { Gradeservice } from '../grade.service';
import { Grade } from '../grade';
import { Stafftimetables } from '../stafftimetables';
/* ../../../  pathback ku poha porav   /folder structure */

@Component({
  selector: 'app-admin-panel-results',
  templateUrl: './admin-panel-results.component.html',
  styleUrls: ['./admin-panel-results.component.css']
})
export class AdminPanelResultsComponent implements OnInit {
  public resultPermanent:Result[];
  public subjectsPermanent:stafftimetable[];

  public results:Result[];
  
  public editResult: Result;
  public deleteResult: Result;
  //statusClass used to identify whether  classId clicked or not
  public  statusClass:  Result[];
  //used to identify admin panel showed or not
  public  statusStudentPanel:boolean=true;


//below one
 public  stafftimetables:stafftimetable[];
 public stafftimetablesNew:Stafftimetables[];
 public specificsubjects:stafftimetable[];
 public students:Student[];
 // public Grades:Grade[];
 //below one
 public grade:Grade[];
// public staffid:string='stf456';
 
//below is used to get stafftimetable of  logged staff
 public staffcheckid:string='stf456';

 //checking primary key
 public checkedPrimaryKeyStatus1:boolean=true;


  constructor(private resultService:ResultService,private stafftimetableservice:Stafftimetableservice,private StafftimetablesNewservice:Stafftimetablesservice,private Gradeservice:Gradeservice,private Studentservice:Studentservice ,private router: Router) { }

  ngOnInit(){
    //this.getResultsBystaffId(this.staffcheckid);
    this.getResults();
   
   
  }


/*
  //get all grades by staff id
public   GradeBystaffid(staffid:string):void {
  this.Gradeservice.GradeBystaffid(staffid).subscribe(
    (response:Grade[])=>{
    this.grade=response;
     },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

*/


  //show adminPanel starthere
  public getStudentPanel():void{
    this.statusStudentPanel=true;
  }
 
  
  
  //get all results
  public  getResults():void {
    
    this.getStaffSubjects();
    this.getGrades();
    this.getAllStudents();
    this.allstaffTimetables();
    
   
   
    // this.subjectByNewStaffTimeTable(this.staffcheckid);//this is not working dont uncomment
    
    //this.GradeBystaffid('stf456');
    this.resultService.getResults().subscribe(
      (response:Result[])=>{
        
      this.results=response;
       },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }  
    );

    
  }


//getresults by staffId
public getResultsBystaffId(key:string):void{
    
   /* this.getStaffSubjects();
    this.getGrades();
    this.getAllStudents();
    this.allstaffTimetables();*/
  
  const results1: Result[] = [];
  //changed below
  for (const result of this.results) {
    if (result.staffId.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
      
      results1.push(result);
      
    }
  }
  //changed below
  this.results = results1;

}



  // i only need to change method name "   " used in service "  "  and import path of the service
  //get all Grades   look thisssss....
public  getGrades():void {
  this.Gradeservice.getGrades().subscribe(
    (response:Grade[])=>{
    this.grade=response;
     },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

// i only need to change method name "getStudentList()" used in service "StudentService"  and import path of the service
//get all students
public  getAllStudents():void {
  
  
  this.Studentservice.getAllStudents().subscribe(
    (response:Student[])=>{
    this.students=response;
    
     },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}



//get students from classes of the new staff
public getStudentsClassIdbyStaffId(key:string):void{

  const staffTimetable: Stafftimetables[] = [];
  const studentsNew: Student[] = [];
  for (const result of this.stafftimetablesNew) {
    if (result.staffid.toLowerCase().indexOf(key.toLowerCase()) !== -1 ) {
        // this.getStudentsByStaffClassId(result.classid);
        //results1.push(result);
        for (const resultstudent of this.students) {
          if (resultstudent.grade.toLowerCase().indexOf(result.classid.toLowerCase()) !== -1 ) {
            
             studentsNew.push(resultstudent);
            
            
          }
        }
      
      
    }
  }
  this.students=studentsNew;
 // this.stafftimetablesNew= results1;

}


// i only need to change method name " " used in service " "  and import path of the service
  //get all stafftimetableresults
  public  getStaffSubjects():void {
    
    this.stafftimetableservice.getStaffSubjects().subscribe(
      (response:stafftimetable[])=>{
      this.stafftimetables=response;
       },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }


  //get subject NEW by new staffID
  public subjectByNewStaffTimeTable(key :string):void{
    const results1: Stafftimetables[] = [];
    for (const result of this.stafftimetablesNew) {
      if (result.staffid.toLowerCase().indexOf(key.toLowerCase()) !== -1
     ) {
        
          results1.push(result);
        
        
      }
    }
    this.stafftimetablesNew= results1;
   
   

  }

  // i only need to change method name " " used in service " "  and import path of the service
  //get all NEW NEW stafftimetableAll
  public allstaffTimetables():void {
    
    this.StafftimetablesNewservice.allstaffTimetables().subscribe(
      (response:Stafftimetables[])=>{
      this.stafftimetablesNew=response;
       },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );

    
  }

  
  public checkPrimaryKey(studentId:string,classId:string,medium:string,term:string,subject:string):void{

    const results1: Result[] = [];
    //changed below
    for (const result of this.results) {
      if (result.studentId.toLowerCase().indexOf(studentId.toLowerCase()) !== -1
      && result.classId.toLowerCase().indexOf(classId.toLowerCase()) !== -1
      && result.medium.toLowerCase().indexOf(medium.toLowerCase()) !== -1
      && result.term.toLowerCase().indexOf(term.toLowerCase()) !== -1
      && result.subject.toLowerCase().indexOf(subject.toLowerCase()) !== -1) {
        
        //results1.push(result);
        this.checkedPrimaryKeyStatus1=false;
        
      }
    }
    

  }

  

  public onAddResult(addForm: NgForm): void {
    
    //this.getStaffSubjects();
    
    
    document.getElementById('add-result-form').click();
    
    this.checkPrimaryKey(addForm.controls['studentId'].value,addForm.controls['classId'].value,addForm.controls['medium'].value,addForm.controls['term'].value,addForm.controls['subject'].value);
   

   if(this.checkedPrimaryKeyStatus1===true){

   
    this.resultService.addResults(addForm.value).subscribe(
      (response: Result) => {
        console.log(response);
        this.getResults();
        addForm.reset();
        this.checkedPrimaryKeyStatus1=true;
        alert("Result added Successfully");
        
      },
      (error: HttpErrorResponse) => {
       // alert(error.message);
        alert('retry again with valid data(enter a valid mark)');
        addForm.reset();
        this.checkedPrimaryKeyStatus1=true;
        
        
      }
    );
    
    }else{
      alert("result already found");
      this.checkedPrimaryKeyStatus1=true;

    }
   }
  

  public onUpdateResult(result: Result): void {
    this.resultService.updateResults(result).subscribe(
      (response: Result) => {
        console.log(response);
        this.getResults();
        alert("Updated Successfully");
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
        alert("Result Deleted Successfully");
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
    //changed below
    for (const result of this.results) {
      if (result.studentId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.classId.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.medium.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||result.term.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || result.subject.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        
        results1.push(result);
        
      }
    }
    //changed below
    this.results = results1;
    if (results1.length === 0 || !key) {
      //check agin here
     // this.resultPermanent=this.results;
      
      this.getResults();
    }
  }



/*
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
    this.resultPermanent = results1;
    if (results1.length === 0 || !key) {
       //already getresults(); here
      
       this.resultPermanent = this.results;
    }
    
  }*/


  /*
  //staffId vice subjects  
  public getStaffviceSubjects(key: string):void {
    
    console.log(key);

   

    const subjects1: stafftimetable[] = [];
    
    for (const stafftimetable of this.stafftimetables) {
      if ( stafftimetable.stafftid.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
       // this.statusClass=subjects1;
        subjects1.push(stafftimetable);
      }
     
    }
    this.stafftimetables = subjects1;
    if (subjects1.length === 0 || !key) {
       //already getresults(); here
      
      // this.stafftimetables = this.stafftimetables;
    }
    
  }

*/
  

  
  
//used to identify add,delete,update
  public onOpenModals(result:Result,mode:string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
   
    this.getResultsBystaffId(this.staffcheckid);

    if(mode==='add'){
      
      this.subjectByNewStaffTimeTable(this.staffcheckid);
      this.getStudentsClassIdbyStaffId(this.staffcheckid);
      button.setAttribute('data-target','#addResultModal');
      
    }
    
    if(mode==='edit'){
      this.editResult=result;
      this.subjectByNewStaffTimeTable(this.staffcheckid);
      this.getStudentsClassIdbyStaffId(this.staffcheckid);
      button.setAttribute('data-target','#updateResultModal');
    }

    if(mode==='delete'){
      this.deleteResult = result;
      button.setAttribute('data-target','#deleteResultModal');
    }
    container.appendChild(button);
    button.click();

  }
  



}

