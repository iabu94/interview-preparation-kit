import { Component, OnInit } from '@angular/core';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-netmvc',
  templateUrl: './netmvc.component.html',
  styleUrls: ['./netmvc.component.scss']
})
export class NetmvcComponent {
  questions: Question[] | undefined;
  criteria = Criteria;

  constructor(private dataService: DataService) {
    this.dataService
      .getQuestions(this.criteria.NETMVC)
      .subscribe((data) => (this.questions = data));
  }
}