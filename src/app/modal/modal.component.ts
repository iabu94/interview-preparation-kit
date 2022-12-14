import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Question } from '../models';

interface DialogData {
  question: Question;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  isArray(val: string | string[]) {
    return typeof val === 'string' ? false : true;
  }
}
