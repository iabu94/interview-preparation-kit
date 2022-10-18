import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-efcore',
  templateUrl: './efcore.component.html',
  styleUrls: ['./efcore.component.scss']
})
export class EfcoreComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.EFCORE)
      .subscribe((data) => (this.questions = data));
  }
}