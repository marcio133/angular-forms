import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FirebaseService, UtilsService } from '../../_services'
import { Injectable } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SelectInputComponent } from '../select-input/select-input.component';
import { ResetableInputComponent } from '../resetable-input/resetable-input.component';
import { LoaderComponent } from '../loader/loader.component';
import { ModalModule } from 'ngx-bootstrap/modal';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let fireService: FirebaseService
  @Injectable()
  class StubFireBaseService {
    public createCost(data) {
      return Promise.resolve(data);
    }
  }

  @Injectable()
  class StubBsModalRef {
    public hide(): void { }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent, SelectInputComponent, ResetableInputComponent, LoaderComponent],
      providers: [
        UtilsService,
        { provide: FirebaseService, useClass: StubFireBaseService }
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        NgxMaskModule.forRoot(),
        CurrencyMaskModule,
        ModalModule.forRoot()
      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fireService = TestBed.get(FirebaseService);
    fixture.detectChanges();
  });

  it('createForm must be called on init', () => {
    spyOn(component, 'createForm')

    component.ngOnInit(); ''

    expect(component.createForm).toHaveBeenCalledTimes(1);
  });

  it('createForm must call config functions configCurrency and updateDate', () => {
    spyOn(component, 'configCurrency')
    spyOn(component, 'updateDate')

    component.createForm(); ''

    expect(component.configCurrency).toHaveBeenCalledTimes(1);
    expect(component.updateDate).toHaveBeenCalledTimes(1);
  });

  it('configCurrency must set corrency control', () => {
    component.createForm(); ''

    expect(component.costForm.get('currency').value).not.toBeNull(1);
  });

  it('updateDate must set mills and millsUTC correctly', () => {
    component.createForm();
    component.costForm.get('date').setValue('28/07/2019');

    component.updateDate(); ''

    expect(component.costForm.get('millis').value).toEqual(1564282800000);
    expect(component.costForm.get('millisUTC').value).toEqual(1564293600000);
  });

  it('onSubmit should call firebaseService add, remove loading and createForm again', fakeAsync(() => {
    spyOn(fireService, 'createCost')
    spyOn(component, 'createForm')

    component.onSubmit()
    tick();

    expect(fireService.createCost).toHaveBeenCalled();
    expect(component.createForm).toHaveBeenCalled();
    expect(component.loading).toBeFalsy();
  }));

  it('must call onSubmit when button is clicked', () => {
    spyOn(component, 'onSubmit')
    component.costForm.get('value').setValue(2);
    component.costForm.get('category').setValue('test');
    const saveButton = fixture.debugElement.query(By.css('.btn-primary'));
    fixture.detectChanges();

    saveButton.nativeElement.click()

    expect(component.onSubmit).toHaveBeenCalled();
  });

});
