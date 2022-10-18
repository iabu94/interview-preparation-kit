import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-agile',
  templateUrl: './agile.component.html',
  styleUrls: ['./agile.component.scss'],
})
export class AgileComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.AGILE)
      .subscribe((data) => (this.questions = data));
  }
}
