import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorButtonMenuComponent } from './anchor-button-menu.component';

describe('AnchorButtonMenuComponent', () => {
  let component: AnchorButtonMenuComponent;
  let fixture: ComponentFixture<AnchorButtonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchorButtonMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorButtonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
