import { Question } from '../question/question.model';

export class User {
  constructor(
    public firstname: string,
    public lastname: string
  ) {}
}

export class Answer {
  constructor(
    public description: string,
    public question: Question,
    public createdAt?: Date,
    public user?: User
  ) {}
}
