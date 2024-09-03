import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-categorie',
  templateUrl: './dialog-categorie.component.html',
  styleUrls: ['./dialog-categorie.component.scss']
})
export class DialogCategorieComponent {

  @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  @Input() selectedUser: any = {};
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onModify = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();


  newuser: any = {};



  RolesOptions = [
      { label: 'Team leader', value: 1 },
      { label: 'Rh', value: 2 },
  ];

  get isAddDialog() {
    return this.dialogType === 'add';
  }

  get isConsultDialog() {
    return this.dialogType === 'consult';
  }

  get isModifyDialog() {
    return this.dialogType === 'modify';
  }

  get isDeleteDialog() {
    return this.dialogType === 'delete';
  }

  get header() {
    switch (this.dialogType) {
      case 'add':
        return 'Add a Category';
      case 'consult':
        return 'Sub Category Details';
      case 'modify':
        return 'Modify';
      default:
        return 'Delete Confirmation';
    }
  }

  get currentCategory() {
    return this.isAddDialog ? this.newuser : this.selectedUser;
  }

  save() {
    if (this.isAddDialog) {
      this.onAdd.emit(this.newuser);
      this.newuser = {};
    } else if (this.isModifyDialog) {
      this.onModify.emit(this.selectedUser);
    }
    this.closeDialog();
  }

  cancel() {
    this.closeDialog();
  }

  confirmDelete() {
    this.onDelete.emit(this.selectedUser);
    this.closeDialog();
  }

  private closeDialog() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}

