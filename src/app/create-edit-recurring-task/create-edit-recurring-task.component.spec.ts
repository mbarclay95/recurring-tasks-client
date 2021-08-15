import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditRecurringTaskComponent } from './create-edit-recurring-task.component';

describe('CreateEditRecurringTaskComponent', () => {
  let component: CreateEditRecurringTaskComponent;
  let fixture: ComponentFixture<CreateEditRecurringTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditRecurringTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditRecurringTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
