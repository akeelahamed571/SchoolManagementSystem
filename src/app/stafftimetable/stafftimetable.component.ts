import { Component, OnInit } from '@angular/core';
import { Stafftimetableservice } from '../stafftimetable.service';
import { Router } from '@angular/router';
import { stafftimetable } from '../stafftimetable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stafftimetable',
  templateUrl: './stafftimetable.component.html',
  styleUrls: ['./stafftimetable.component.css']
})
export class StafftimetableComponent implements OnInit {
  public stafftimetable:stafftimetable[];
  constructor(private Stafftimetableservice:Stafftimetableservice,private router: Router) { }

  ngOnInit() {
  this.getStaffSubjects();
 
  }
//get all stafftimetableresults
public  getStaffSubjects():void {
  this.Stafftimetableservice.getStaffSubjects().subscribe(
    (response:stafftimetable[])=>{
    this.stafftimetable=response;
     },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

}
