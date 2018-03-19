import { QuestionListComponent } from './question-list.component';
import { QuestionDetailComponent } from './question-detail.component';

 export const QUESTION_ROUTES = [
  { path: '', component: QuestionListComponent },
  { path: ':_id', component: QuestionDetailComponent }
];
