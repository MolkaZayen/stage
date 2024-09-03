import { Component } from '@angular/core';

@Component({
  selector: 'app-sousliste',
  templateUrl: './sousliste.component.html',
  styleUrls: ['./sousliste.component.scss']
})
export class SouslisteComponent {
  user: any[] = [];  // This should be fetched from a service
  selectedUser: any = null; // ki nselectioni user masnou3 deja , yich3lo il 9roussa ili nijim nistaamilhoum
  currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  isDialogVisible: boolean = false;

  constructor() {
    // Sample data for testing purposes
    this.user = [
      {
          createdby: 'molka',
          subcategoryname: 'aaaa',
          categoryname : 'jjjj',
          creationdate : '20/8/2023',
          actions: 'xxx',
       

        },
      
      {
        createdby: 'molka',
        subcategoryname : 'gggg',
        categoryname: 'bbbbb',
        creationdate : '21/8/2023',
        actions: 'yyy',
        

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
