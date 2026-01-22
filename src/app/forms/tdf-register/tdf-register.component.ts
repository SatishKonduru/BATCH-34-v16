import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-register',
  templateUrl: './tdf-register.component.html',
  styleUrls: ['./tdf-register.component.css'],
})
export class TdfRegisterComponent {
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
