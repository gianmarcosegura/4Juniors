import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent {
  question: Question = new Question(
    'Título',
    'Descripción',
    new Date,
    'devicon-angularjs-plain'
  );
}
