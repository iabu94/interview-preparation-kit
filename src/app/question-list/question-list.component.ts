import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { Criteria, DataModel, Question } from '../models';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss'],
})
export class QuestionListComponent {
  allQuestions$: Observable<DataModel[]>;
  questions$: Observable<Question[] | undefined>;
  url$: Observable<string>;
  criteria$: Observable<Criteria>;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    public dialog: MatDialog,
    private storage: AngularFireStorage
  ) {
    // JSON file url
    this.url$ = this.storage.ref('data.json').getDownloadURL();

    // Criteria from route params
    this.criteria$ = this.route.params.pipe(
      map((params) => params['criteria'] as Criteria)
    );

    // Read the JSON document from URL
    this.allQuestions$ = this.url$.pipe(
      switchMap((url) => this.dataService.getData(url))
    );

    // Combine Criteria and All Questions, filter questions based on the criteria
    this.questions$ = combineLatest([this.allQuestions$, this.criteria$]).pipe(
      map(
        ([questions, criteria]) =>
          questions.find((question) => question.criteria === criteria)
            ?.questions
      )
    );
  }

  toggleModal(question: Question) {
    this.dialog.open(ModalComponent, {
      data: {
        question,
      },
    });
  }
}
