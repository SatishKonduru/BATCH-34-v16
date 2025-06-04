import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatRadioChange } from '@angular/material/radio';
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
  selectedGender = '';
  keyUpValue = '';
  keyDownValue = '';
  keyEnterValue = '';
  foucsStatus = '';
  contextValue = '';
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

  onGenderChange(e: MatRadioChange) {
    // console.log(e.value);
    this.selectedGender = e.value;
  }

  onKeyUp(e: KeyboardEvent) {
    // console.log(e);
    this.keyUpValue = e.key;
  }

  onKeyDown(e: KeyboardEvent) {
    this.keyDownValue = e.key;
  }

  onEnterKey = (e: KeyboardEvent) => {
    this.keyEnterValue = 'Enter Key Pressed';
  };

  onFocus = () => {
    this.foucsStatus = 'Input Got Focus';
  };

  onBlur = () => {
    this.foucsStatus = 'Input LOST focus';
  };

  onMouseOver = () => console.log('Mouse Over');
  onMouseEnter = () => console.log('Mouse Enter');
  onMouseLeave = () => console.log('Mouse Leave');

  onRightClick(e: MouseEvent) {
    console.log(e);
    e.preventDefault();
    this.contextValue = 'Right Clicked';
  }
}
