import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringTaskHistoryRowComponent } from './recurring-task-history-row.component';

describe('RecurringTaskHistoryRowComponent', () => {
  let component: RecurringTaskHistoryRowComponent;
  let fixture: ComponentFixture<RecurringTaskHistoryRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringTaskHistoryRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringTaskHistoryRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
