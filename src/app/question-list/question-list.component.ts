import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  @Input() questions: Question[] | undefined = [];
  questions$!: Observable<Question[] | undefined>;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe((params) => {
      this.questions$ = this.dataService.getQuestions(
        params['criteria'] as Criteria
      );
    });
  }
}
