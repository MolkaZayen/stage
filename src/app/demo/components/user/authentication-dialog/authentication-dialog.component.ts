import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-authentication-dialog',
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.scss']
})
export class AuthenticationDialogComponent {
  display = true;
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      password: [''],
      confirmPassword: [''],
    });
  }

  passwordsMatch(): boolean {
    return this.authForm.value.password === this.authForm.value.confirmPassword;
  }

  onNext() {
    // Logic to proceed to the next step
  }

  onPrevious() {
    // Logic to go back to the previous step
  }

}
