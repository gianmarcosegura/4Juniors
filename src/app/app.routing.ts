import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from './question/question-list.component';
import { AuserScreenComponent } from './auser/auser-screen.component';
import { SignUpComponent } from './sign-up-user/upuser.component';

const APP_ROUTES: Routes = [
  { path: '', component: QuestionListComponent, pathMatch: 'full'},
  { path: 'signin', component: AuserScreenComponent},
  { path: 'signup', component: SignUpComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
