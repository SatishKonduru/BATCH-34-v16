import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  preserveWhitespaces: true,
})
export class Parent2Component {
  @ViewChildren('inputBox') inputBoxes: QueryList<ElementRef>;
  @ViewChildren(Child2Component) children: QueryList<Child2Component>;
  logValues() {
    // console.log(this.inputBoxes.last.nativeElement.value);
    this.inputBoxes.forEach((inputBox) => {
      console.log(inputBox.nativeElement.value);
    });
  }

  greetAll() {
    this.children.forEach((child) => {
      child.sayHello();
    });
  }
}
