import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/demo/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string;
  password: string;
  isDialogVisible: boolean = false;
  currentDialogType: string = 'forgotPassword';
  selectedUser: any;
  user: any[] = [];  // This should be fetched from a service

  constructor(private authService: AuthService, private router: Router) {
    // Sample data for testing purposes
    this.user = [
      {
        createdby: 'molka',
        categoryname: 'aaaa',
        creationdate: '20/8/2023',
        actions: 'xxx',
      },
      {
        createdby: 'molka',
        categoryname: 'bbbbb',
        creationdate: '20/8/2023',
        actions: 'yyy',
      }
    ];
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        this.router.navigate(['/dashboard']); // Navigate to a secure route after login
      },
      error => {
        console.error('Login failed:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }

  onForgotPassword() {
    // Implement the logic for forgot password here
    console.log('Forgot password');
  }

  showDialog() {
    // Your logic for showing the dialog or any action
    alert('Dialog is shown!');
  }

  showDialogCompte() {
    this.isDialogVisible = true;
  }

  openDialog(type: 'add' | 'consult' | 'modify' | 'delete', user?: any) {
    this.currentDialogType = type;
    this.selectedUser = user || {}; // Ensure `user` is set correctly
    this.isDialogVisible = true;
  }

  enableButtons() {
    // This method can be used to enable or disable buttons based on the selected row
  }

  handleAdd(newUser: any) {
    // Handle add operation
    this.user.push(newUser);
  }

  handleModify(modifiedUser: any) {
    // Handle modify operation
    const index = this.user.findIndex(l => l.codeUser === modifiedUser.codeUser);
    if (index !== -1) {
      this.user[index] = modifiedUser;
    }
  }

  handleDelete(deletedUser: any) {
    // Handle delete operation
    this.user = this.user.filter(l => l.codeUser !== deletedUser.codeUser);
  }
}
