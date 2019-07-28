import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  profileForm: FormGroup;
  @ViewChild('someInput', { read: ElementRef, static: true }) someInput: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = new FormGroup({
      cost: new FormControl(''),
      value: new FormControl(''),
      category: new FormControl(''),
      description: new FormControl(''),
      client: new FormControl(''),
      job: new FormControl(''),
      notes: new FormControl('')
    })
  }

  onSubmit() {
    console.log('====================================');
    console.log(this.profileForm.value);
    console.log('====================================');
  }

  handleValue() {
    this.someInput.nativeElement.setSelectionRange(-1, -1);
  }

}
