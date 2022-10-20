import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { Criteria, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  questions$!: Observable<Question[] | undefined>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog
  ) {
    this.route.params.subscribe((params) => {
      this.questions$ = this.dataService.getQuestions(
        params['criteria'] as Criteria
      );
    });
  }

  toggleModal(question: Question) {
    this.dialog.open(ModalComponent, {
      data: {
        question,
      },
    });
  }
}
