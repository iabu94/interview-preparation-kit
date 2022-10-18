import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  @Input() questions: Question[] | undefined = [];
}
