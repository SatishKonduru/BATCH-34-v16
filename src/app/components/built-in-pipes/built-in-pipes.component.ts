import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
})
export class BuiltInPipesComponent {
  emp = {
    name: 'Satish',
    age: 45,
    dept: 'Angular',
  };
  todayDate = new Date();
}
