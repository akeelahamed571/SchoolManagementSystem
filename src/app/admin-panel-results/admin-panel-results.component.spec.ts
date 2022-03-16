import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelResultsComponent } from './admin-panel-results.component';

describe('AdminPanelResultsComponent', () => {
  let component: AdminPanelResultsComponent;
  let fixture: ComponentFixture<AdminPanelResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
