import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { categorys, currencies } from '../../_models/consts';
import { UtilsService } from 'src/app/_services/utils.service';
import { FirebaseService } from 'src/app/_services/firebase.service';
import Cost from 'src/app/_models/Cost';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  costForm: FormGroup;
  categorys = categorys;
  currencies = currencies;
  loading: boolean;
  @ViewChild('someInput', { read: ElementRef, static: true }) someInput: ElementRef;

  constructor(private utilsService: UtilsService, private fireService: FirebaseService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.costForm = new FormGroup({
      date: new FormControl(null, Validators.required),
      millis: new FormControl(null, Validators.required),
      millisUTC: new FormControl(null, Validators.required),
      value: new FormControl('00.0', [Validators.required, Validators.min(0.01)]),
      currency: new FormControl('', Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(''),
      client: new FormControl(''),
      job: new FormControl(''),
      notes: new FormControl('')
    })

    const todayDate = this.utilsService.getFormatedDate(new Date())
    this.costForm.get('date').setValue(todayDate);

    this.configCurrency();
    this.updateDate();
  }

  async onSubmit() {
    this.loading = true;
    const res = await this.fireService.createCost(this.costForm.value as Cost);
    console.log(res);
    this.loading = false;

  }

  configCurrency() {
    var locale = window.navigator.language || 'en_US';
    this.costForm.get('currency').setValue(this.currencies[locale].symbol);
  }

  updateDate() {
    const dataString = this.costForm.get('date').value
    var dateParts = dataString.split("/");
    const data = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    data.setHours(0, 0, 0, 0)

    this.costForm.get('millis').setValue(data.getTime());
    this.costForm.get('millisUTC').setValue(data.getTime() + (data.getTimezoneOffset() * 60000));
  }

  handleValue() {
    this.someInput.nativeElement.setSelectionRange(-1, -1);
  }

  get prefix() {
    return this.costForm.get('currency').value
  }

}
