import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/question-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) :
       new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
