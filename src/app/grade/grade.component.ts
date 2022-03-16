import { Component, OnInit } from '@angular/core';
import { Gradeservice } from '../grade.service';
import { Router } from '@angular/router';
import { Grade } from '../grade';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  public grade:Grade[];
  constructor(private Gradeservice:Gradeservice,private router: Router) { }

  ngOnInit() {
  }

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




}
