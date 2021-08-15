import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringTasksPageComponent } from './recurring-tasks-page.component';

describe('RecurringTasksPageComponent', () => {
  let component: RecurringTasksPageComponent;
  let fixture: ComponentFixture<RecurringTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringTasksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
