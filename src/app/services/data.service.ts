import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, startWith } from 'rxjs/operators';
import { Criteria, DataModel, Question } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'assets/data.json';
  constructor(private http: HttpClient) {}

  getQuestions(criteria: Criteria): Observable<Question[] | undefined> {
    return this.http
      .get<DataModel[]>(this.url)
      .pipe(map((d) => d.find((x) => x.criteria == criteria)?.questions));
  }
}
