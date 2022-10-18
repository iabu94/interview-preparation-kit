import { Criteria } from './criteria';
import { Question } from './question';

export interface DataModel {
  criteria: Criteria;
  questions: Question[];
}
