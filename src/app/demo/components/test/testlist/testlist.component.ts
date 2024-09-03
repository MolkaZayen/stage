import { Component } from '@angular/core';

@Component({
  selector: 'app-testlist',
  templateUrl: './testlist.component.html',
  styleUrls: ['./testlist.component.scss']
})
export class TestlistComponent {
  test: any[] = [];  // This should be fetched from a service
  selectedTest: any = null; // ki nselectioni Test masnou3 deja , yich3lo il 9roussa ili nijim nistaamilhoum
  currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  isDialogVisible: boolean = false;

  constructor() {
    // Sample data for testing purposes
    this.test = [
      {
          createdby: 'molka',
          categoryname: 'aaaa',
          creationdate : '20/8/2023',
          actions: 'xxx',
       

        },
      
      {
        createdby: 'molka',
        categoryname: 'bbbbb',
        creationdate : '20/8/2023',
        actions: 'yyy',
        

      }
    ];
  }

  openDialog(type: 'add' | 'consult' | 'modify' | 'delete', test?: any) {
    this.currentDialogType = type;
    this.selectedTest = this.test || {};
    this.isDialogVisible = true;
  }

  enableButtons() {
    // This method can be used to enable or disable buttons based on the selected row
  }

  handleAdd(newTest: any) {
    // Handle add operation
    this.test.push(newTest);
  }

  handleModify(modifiedTest: any) {
    // Handle modify operation
    const index = this.test.findIndex(l => l.codeTest === modifiedTest.codeTest);
    if (index !== -1) {
      this.test[index] = modifiedTest;
    }
  }

  handleDelete(deletedTest: any) {
    // Handle delete operation
    this.test = this.test.filter(l => l.codeTest !== deletedTest.codeTest);
  }
}


