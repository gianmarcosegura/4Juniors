import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { AuserScreenComponent } from './auser/auser-screen.component';
import { SignUpComponent } from './sign-up-user/upuser.component';
import { QUESTION_ROUTES } from './question/question.routing';

const APP_ROUTES: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full'},
  { path: 'signin', component: AuserScreenComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'questions', children: QUESTION_ROUTES }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
