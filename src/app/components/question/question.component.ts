import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() question: string = '';
  answer: string = '';
  isAnswered(): boolean {
    return this.answer.trim().length > 0;
  }
}
