import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputComponent } from './select-input.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl } from '@angular/forms';
import { Injectable, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

describe('SelectInputComponent', () => {
  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;
  let modalService: BsModalService;
  @Injectable()
  class StubbedModalService {
    public show() {
      return;
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectInputComponent],
      providers: [
        { provide: BsModalService, useClass: StubbedModalService }
      ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputComponent);
    component = fixture.componentInstance;
    component.parentForm = new FormGroup({ teste: new FormControl('') })
    component.control = 'teste';
    component.labelName = 'Teste';
    component.options = ['testeOption']
    fixture.detectChanges();

    modalService = TestBed.get(BsModalService);

  });

  it('openOptions should call the modalService and make a subscription', () => {
    let modalRef = new BsModalRef();
    modalRef['content'] = {
      selectEvent: new EventEmitter()
    }
    spyOn(modalService, 'show').and.returnValue(modalRef);
    spyOn(component.subscriptions, 'add')
    component.openOptions(new Event('click'));
    console.log(component.bsModalRef)
    expect(modalService.show).toHaveBeenCalled();
    expect(component.subscriptions.add).toHaveBeenCalled();
  });
});
