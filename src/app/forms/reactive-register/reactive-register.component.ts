import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css'],
})
export class ReactiveRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  private fb = inject(FormBuilder);
  // constructor(private fb : FormBuilder){}
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male'],
      country: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });
  }
}
