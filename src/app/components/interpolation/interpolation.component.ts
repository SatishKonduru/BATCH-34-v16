import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  name = 'SATISH KONDURU';
  age = 45;
  getName() {
    return this.name;
  }
}
