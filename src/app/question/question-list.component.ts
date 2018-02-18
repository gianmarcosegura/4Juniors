import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
  'Pregunta sobre Java',
  'Cual es la diferencia entre Java y Javascript',
  new Date(),
  'none'
);

@Component ({
  selector: 'app-question-list',
  templateUrl: 'question-list.component.html',
  styles: [`
    i{
      font-size: 45px;
    }
  `]
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
 }
