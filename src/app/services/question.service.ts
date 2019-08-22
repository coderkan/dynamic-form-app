import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base';
import { DropdownQuestion } from '../models/question-dropdown';
import { TextboxQuestion } from '../models/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),
      new DropdownQuestion({
        key: 'brave',
        label: 'What is Gizem\'s favorite team?',
        options: [
          {key: 'gs',  value: 'Galatasaray'},
          {key: 'fb',  value: 'Fenerbahçe'},
          {key: 'bjk',   value: 'Beşiktaş' }
        ],
        order: 4
      }),
    ];
    return questions.sort((a, b) => a.order - b.order);
  }
}
