import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelResultsComponent } from './admin-panel-results/admin-panel-results.component';
import { StudentPanelResultsComponent } from './student-panel-results/student-panel-results.component';
//import { UserComponent } from './component/user/user.component';
//import { AdminPanelResultsComponent } from './admin-panel-results/admin-panel-results.component';


const routes: Routes = [
  {path: 'adminPanelResults', component: AdminPanelResultsComponent},
  {path: 'studentPanelResults', component: StudentPanelResultsComponent},
  {path: '', redirectTo: 'adminPanelResults', pathMatch: 'full'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }