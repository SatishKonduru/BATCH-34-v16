import { Component } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css'],
})
export class SenderComponent {
  message = 'This Message is from Parent Component';
  incomingMsg = '';
}
