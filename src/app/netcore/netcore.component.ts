import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-netcore',
  templateUrl: './netcore.component.html',
  styleUrls: ['./netcore.component.scss']
})
export class NetcoreComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.NETCORE)
      .subscribe((data) => (this.questions = data));
  }
}