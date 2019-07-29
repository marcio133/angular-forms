import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetableInputComponent } from './resetable-input.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

describe('ResetableInputComponent', () => {
  let component: ResetableInputComponent;
  let fixture: ComponentFixture<ResetableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetableInputComponent],
      providers: [],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetableInputComponent);
    component = fixture.componentInstance;
    component.parentForm = new FormGroup({ teste: new FormControl('') })
    component.control = 'teste';
    component.labelName = 'Teste';
    fixture.detectChanges();
  });

  it('reset method must set the control value to empty string', () => {
    const { control, parentForm } = component;
    parentForm.get(control).setValue('teste');

    component.reset();

    expect(parentForm.get(control).value).toBe('');
  });
});
