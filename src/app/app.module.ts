import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultService } from './result.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentPanelResultsComponent } from './student-panel-results/student-panel-results.component';
import { AdminPanelResultsComponent } from './admin-panel-results/admin-panel-results.component';
import { AppRoutingModule } from './app-routing.module';
import { StafftimetableComponent } from './stafftimetable/stafftimetable.component';
import { Stafftimetableservice } from './stafftimetable.service';
import { GradeComponent } from './grade/grade.component';
import { StudentComponent } from './student/student.component';
import { Studentservice } from './student.service';
//import { UserComponent } from './component/user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentPanelResultsComponent,
    AdminPanelResultsComponent,
    StafftimetableComponent,
    GradeComponent,
    StudentComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [ResultService,Stafftimetableservice,Studentservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
