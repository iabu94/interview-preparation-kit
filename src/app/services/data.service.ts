import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Criteria, DataModel, Question } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // url = 'assets/data.json';
  url = 'assets/data.json';
  // ?alt=media&token=a8fa82b3-7408-4c87-b9c7-ff158b900dd5
  constructor(private http: HttpClient) {}

  getQuestions(criteria: Criteria): Observable<Question[] | undefined> {
    return this.http
      .get<DataModel[]>(this.url)
      .pipe(map((d) => d.find((x) => x.criteria == criteria)?.questions));
    // return this.http
    //   .get<DataModel[]>(
    //     'https://firebasestorage.googleapis.com/v0/b/interview-prep-kit.appspot.com/o/data.json',
    //     {
    //       params: {
    //         alt: 'media',
    //         token: 'a8fa82b3-7408-4c87-b9c7-ff158b900dd5',
    //       },
    //     }
    //   )
    //   .pipe(map((d) => d.find((x) => x.criteria == criteria)?.questions));
  }

  // getFileJson() {
  //   const ref = this.storage.ref('data.json');
  //   ref.getMetadata().subscribe((data) => console.log(data));
  // }
}
