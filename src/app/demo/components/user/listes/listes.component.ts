import { Component } from '@angular/core';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.scss']
})
export class ListesComponent {
  user: any[] = [];  // This should be fetched from a service
  selectedUser: any = null; // ki nselectioni user masnou3 deja , yich3lo il 9roussa ili nijim nistaamilhoum
  currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  isDialogVisible: boolean = false;

  constructor() {
    // Sample data for testing purposes
    this.user = [
      {
          user: 'molka',
          id: '11111',
          email : 'molka@gmail.com',
          roles : 'Ressources humaines',
          access : 'Allowed',
          creationdate : '20/8/2024',
          lastcreation : '20/9/2024',
          actions :'.....',

        },
      
      {
          user: 'zayen',
          id: '12222',
          email : 'zayen@gmail.com',
          roles : 'Ressources humaines',
          access : 'Allowed',
          creationdate : '20/8/2024',
          lastcreation : '20/9/2024',
          actions :'.....',
        

      }
    ];
  }

  openDialog(type: 'add' | 'consult' | 'modify' | 'delete', user?: any) {
    this.currentDialogType = type;
    this.selectedUser = this.user || {};
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
