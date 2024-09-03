import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-personal-info-dialog',
  templateUrl: './personal-info-dialog.component.html',
  styleUrls: ['./personal-info-dialog.component.scss']
})
export class PersonalInfoDialogComponent {
  display = true;
  personalInfoForm: FormGroup;
  roles = [{ label: 'Administrator', value: 'admin' }, { label: 'User', value: 'user' }];

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      lastName: [''],
      firstName: [''],
      email: [''],
      roles: [''],
    });
  }

  onNext() {
    // Logic to proceed to the next step
  }

  onCancel() {
    this.display = false;
  }

}
