import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resetable-input',
  templateUrl: './resetable-input.component.html',
  styleUrls: ['./resetable-input.component.scss']
})
export class ResetableInputComponent implements OnChanges {
  @Input() parentForm: FormGroup;
  @Input() control: string;
  @Input() labelName: String;
  @Input() placeholder?: String = 'Optional';

  constructor() { }

  ngOnChanges(): void {
  }

  reset() {
    this.parentForm.get(this.control).reset();
  }

}
