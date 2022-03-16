import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPanelResultsComponent } from './student-panel-results.component';

describe('StudentPanelResultsComponent', () => {
  let component: StudentPanelResultsComponent;
  let fixture: ComponentFixture<StudentPanelResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPanelResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPanelResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
