import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsModalComponent } from './options-modal.component';

describe('OptionsModalComponent', () => {
  let component: OptionsModalComponent;
  let fixture: ComponentFixture<OptionsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
