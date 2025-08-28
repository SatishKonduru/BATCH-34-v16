import { Component, ContentChildren, QueryList } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  topicName = '@ContentChildren()';
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;
  stepTitles: string[] = [];
  currentStepIndex: number = 0;
  ngAfterContentInit() {
    this.stepTitles = this.steps.map((step) => step.title);
  }
  goToStep(index: number) {
    if (index >= 0 && index < this.steps.length) {
      this.currentStepIndex = index;
    }
  }
}
