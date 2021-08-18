import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringTaskTableComponent } from './recurring-task-table.component';

describe('RecurringTaskTableComponent', () => {
  let component: RecurringTaskTableComponent;
  let fixture: ComponentFixture<RecurringTaskTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringTaskTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringTaskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
