import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("On Submit")
    if (this.registrationForm.valid) {
      console.log("If block")
      console.log('Form submitted:', this.registrationForm.value);
    } else {
      console.log("Else block")
      this.registrationForm.markAllAsTouched();
    }
  }

  get f() { return this.registrationForm.controls; }

}
