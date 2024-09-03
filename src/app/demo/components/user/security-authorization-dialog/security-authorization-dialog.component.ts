import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-security-authorization-dialog',
  templateUrl: './security-authorization-dialog.component.html',
  styleUrls: ['./security-authorization-dialog.component.scss']
})
export class SecurityAuthorizationDialogComponent {
  display = true;
  securityForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.securityForm = this.fb.group({
      access: ['allowed'],
    });
  }

  onAdd() {
    // Logic to save the data
  }

  onPrevious() {
    // Logic to go back to the previous step
  }

}
