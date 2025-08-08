import { Component, QueryList, ViewChildren } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

interface QuestionItem {
  id: number;
  text: string;
}

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
})
export class QuestionnaireComponent {
  // questions: string[] = [
  //   'What is your name?',
  //   'What is your favorite Language?',
  //   'What is your goal in learing with Angular?',
  //   'What is your native Place? ',
  // ];
  // @ViewChildren(QuestionComponent)
  // questionComponent: QueryList<QuestionComponent>;

  // allAnswered: boolean = false;
  // checked: boolean = false;
  // checkAnswers() {
  //   this.checked = true;
  //   this.allAnswered = this.questionComponent
  //     .toArray()
  //     .every((q) => q.isAnswered());
  // }
  @ViewChildren(QuestionComponent)
  questionComponents: QueryList<QuestionComponent>;
  newQuestions: QuestionItem[] = [
    { id: 1, text: 'What is your name?' },
    { id: 2, text: 'What is your mother tongue?' },
  ];
  newQuestion: string = '';
  allAnswered: boolean = false;
  checked: boolean = false;
  nextId = 2;
  checkAnswers() {
    this.checked = true;
    this.allAnswered = this.questionComponents
      .toArray()
      .every((q) => q.isAnswered());
  }
  addQuestion() {
    if (this.newQuestion.trim()) {
      this.newQuestions.push({
        id: this.nextId++,
        text: this.newQuestion.trim(),
      });
      this.newQuestion = '';
    }
  }
  removeQuestion(index: number) {
    this.newQuestions.splice(index, 1);
  }
}
