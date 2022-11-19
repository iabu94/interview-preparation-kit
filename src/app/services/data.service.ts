import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Criteria, DataModel, Question } from '../models';

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

  getData(url: string): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(url).pipe(retry(1));
  }

  getDataLocal(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.url);
  }
}
