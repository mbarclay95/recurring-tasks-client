import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAddTaskComponent } from './quick-add-task.component';

describe('QuickAddTaskComponent', () => {
  let component: QuickAddTaskComponent;
  let fixture: ComponentFixture<QuickAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickAddTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
