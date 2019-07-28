import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-options-modal',
  templateUrl: './options-modal.component.html',
  styleUrls: ['./options-modal.component.scss']
})
export class OptionsModalComponent implements OnInit {
  title: String;
  options: Array<String>;
  selectEvent: EventEmitter<String> = new EventEmitter

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  setValue(option) {
    this.selectEvent.emit(option);
    console.log('====================================');
    console.log(option);
    console.log('====================================');
    this.bsModalRef.hide();
  }

}
