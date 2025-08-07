import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  questions: string[] = [
    'What is your name?',
    'What is your favorite Language?',
    'What is your goal in learing with Angular?',
    'What is your native Place? ',
  ];
  @ViewChildren(QuestionComponent)
  questionComponent: QueryList<QuestionComponent>;

  allAnswered: boolean = false;
  checked: boolean = false;
  checkAnswers() {
    this.checked = true;
    this.allAnswered = this.questionComponent
      .toArray()
      .every((q) => q.isAnswered());
  }
}
