import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { OptionsModalComponent } from '../options-modal/options-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup;
  @Input() control: string;
  @Input() labelName: String;
  @Input() options: Array<String>;
  @Input() placeholder?: String = 'Select a category';

  bsModalRef: BsModalRef;
  private subscriptions: Subscription = new Subscription
  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  openOptions(event) {
    event.stopPropagation()
    const initialState = {
      options: this.options,
      title: `Select the ${this.labelName}`
    };

    this.bsModalRef = this.modalService.show(OptionsModalComponent, { initialState });

    this.subscriptions.add(this.bsModalRef.content.selectEvent.subscribe(option => this.parentForm.get(this.control).setValue(option)));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

  }

}
