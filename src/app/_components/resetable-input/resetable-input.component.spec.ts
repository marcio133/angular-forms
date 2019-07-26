import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetableInputComponent } from './resetable-input.component';

describe('ResetableInputComponent', () => {
  let component: ResetableInputComponent;
  let fixture: ComponentFixture<ResetableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
