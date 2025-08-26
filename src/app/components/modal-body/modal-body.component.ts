import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-body',
  templateUrl: './modal-body.component.html',
  styleUrls: ['./modal-body.component.css'],
})
export class ModalBodyComponent {
  bodyMessage = 'Hey I am Modal Body from Body Component';
  getBodyMessage() {
    return this.bodyMessage;
  }
}
