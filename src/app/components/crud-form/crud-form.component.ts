import { Component, OnInit } from '@angular/core';
import { QuestionBase } from 'src/app/models/question-base';
import { QuestionService } from 'src/app/services/question.service';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control.service';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.scss'],
  providers:  [QuestionService, QuestionControlService]
})
export class CrudFormComponent implements OnInit {

  payload = '';
  formGp: FormGroup;
  tempQuestions: any[];//   QuestionBase<any>[] = [];
  typeList: string[] = [
    'textbox',
    'dropdown'
  ];

  constructor(service: QuestionService, qcs: QuestionControlService) {
    let group: any =

    this.tempQuestions = service.getQuestions();
    let questions: QuestionBase<any>[] = [];
    this.formGp = qcs.toFormGroup(questions);
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log("On Submit");
    this.payload = JSON.stringify(this.formGp.value);
    console.log("Payload: " + this.payload);
  }
}
