import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent {
  question: Question = new Question(
    'Título',
    'Descripción',
    new Date,
    'devicon-angularjs-plain'
  );
}
