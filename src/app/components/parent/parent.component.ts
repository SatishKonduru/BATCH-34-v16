import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  topicName = '@ViewChild with Component Reference';
  @ViewChild(ChildComponent) childComp: ChildComponent;

  ngOnInit() {
    console.log(
      'In OnInit, Child message(From Parent)',
      this.childComp?.childMessage
    );
  }
  ngAfterViewInit() {
    console.log(
      'In AfterViewInit, Child message(From Parent)',
      this.childComp?.childMessage
    );
  }
  callChildMethod() {
    if (this.childComp) {
      this.childComp.showMessage();
    } else {
      alert('Child Component  is not yet available in view');
    }
  }
}
