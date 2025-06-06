import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css'],
})
export class ClassBindingComponent {
  textSize = 'myTextSize';
  textColor = 'myTextColor';
  myGroupClasses = {
    myTextColor: false,
    myTextSize: false,
  };
}
