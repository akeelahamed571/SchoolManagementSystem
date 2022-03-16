import { Component, OnInit } from '@angular/core';
import { AdminPanelResultsComponent } from '../admin-panel-results/admin-panel-results.component';
import { ResultService } from '../result.service';
import { Result } from '../result';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-student-panel-results',
  templateUrl: './student-panel-results.component.html',
  styleUrls: ['./student-panel-results.component.css']
})
export class StudentPanelResultsComponent implements OnInit {
  public results:Result[];
  public resultsStudent:Result[];
  id:string;
  statusStudentResuts:boolean=false;
  //below is used to get result of  logged student
  public resultcheckid:string='std45';
  
  
  constructor(private router: Router, private ResultService: ResultService) { }

  ngOnInit() {
    /*this.id = this.route.snapshot.params['id'];
  
    const results1: Result[] = [];
    this.ResultService.getStudentResult(this.id).subscribe( data => {
      this.results[] = data;
    });
  }*/
  
  //this.searchStudentPanelResults("std137");
  //this.getResults();

  }


//set   click() function in html
  public goToAdminPanelResultList(){
    this.router.navigate(['/adminPanel']);
  }
 
   // coding ...still
  public searchStudentPanelResults(key: string): void {
  
  this.getResults();
  console.log(key);
  const results1: Result[] = [];
  for (const result of this.results) {
    if (result.studentId.toLowerCase().indexOf(key.toLowerCase()) !== -1
    
    ) {
      //this.statusStudentResuts=true;
      results1.push(result);
    }
  }
  this.resultsStudent = results1;
  if (results1.length === 0 || !key) {
   // this.statusStudentResuts=false;
    this.getResults();
   
  }
}


//get all results
public  getResults():void {
  this.ResultService.getResults().subscribe(
    (response:Result[])=>{
    this.results=response;
     },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

}
