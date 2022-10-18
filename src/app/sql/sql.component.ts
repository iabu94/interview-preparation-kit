import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})
export class SqlComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.SQL)
      .subscribe((data) => (this.questions = data));
  }
}
