import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      address: new FormGroup({
        address1 : new FormControl(null),
        address2 : new FormControl(null),
        city: new FormControl(null),
        pincode: new FormControl(null)
      }),

      skills: new FormArray([
        new FormControl(null),


      ]),
      agree: [false, Validators.requiredTrue],


    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  addSkill(){
      (<FormArray>this.registerForm.controls.skills).push(new FormControl(null))
  }

  deleteSkill(index: number){
    (<FormArray>this.registerForm.controls.skills).removeAt(index)
  }
}
