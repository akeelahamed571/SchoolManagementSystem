import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftimetableComponent } from './stafftimetable.component';

describe('StafftimetableComponent', () => {
  let component: StafftimetableComponent;
  let fixture: ComponentFixture<StafftimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafftimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafftimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
