import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css'],
})
export class IfComponent {
  isLoggedIn = false;
  isLoading = false;
  user = { name: 'RSK' };
  isAdmin = false;
  isUser = true;
  username = '';
}
