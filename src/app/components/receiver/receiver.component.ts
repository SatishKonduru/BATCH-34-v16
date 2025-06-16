import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css'],
})
export class ReceiverComponent {
  @Input() postman: any;
  @Output() reply = new EventEmitter();
  replyMessage() {
    this.reply.emit("This is Child's Reply");
  }
}
