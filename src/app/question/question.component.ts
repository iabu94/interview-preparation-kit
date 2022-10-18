import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.PERSONAL)
      .subscribe((data) => (this.questions = data));
  }
}