import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
  preserveWhitespaces: true,
})
export class EventBindingComponent {
  name: string = '';
  result = '';
  inputValue = '';
  selectedValue = '';
  isChecked = false;
  getName() {
    this.name = 'SATISH';
  }
  clearName() {
    this.name = '';
  }

  onDoubleClick() {
    this.result = 'You double clicked this Button';
  }

  onInput(e: Event) {
    // const value = (e.target as HTMLInputElement).value;
    // this.inputValue = value;
    // or
    this.inputValue = (e.target as HTMLInputElement).value;
  }
  onInputWithValue(value: any) {
    this.inputValue = value;
  }

  onChange(e: MatSelectChange) {
    this.selectedValue = e.value;
  }

  onCheckBoxChange(e: MatCheckboxChange) {
    this.isChecked = e.checked;
  }
}
