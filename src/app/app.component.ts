import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:  [QuestionService]
})
export class AppComponent {
  title = 'dynamic-form-app';
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
