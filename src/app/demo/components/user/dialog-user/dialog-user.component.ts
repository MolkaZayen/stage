import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent {
  @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    @Input() selectedUser: any = {};
    @Input() visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();
    @Output() onAdd = new EventEmitter<any>();
    @Output() onModify = new EventEmitter<any>();
    @Output() onDelete = new EventEmitter<any>();


    newuser: any = {};
    access: any; 


    RolesOptions = [
        { label: 'Administrateur', value: 1 },
        { label: 'Ressources humaines', value: 2 },
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
          return 'Add User';
        case 'consult':
          return 'User Details';
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
    newpassword: string = '';
    password: string = '';
    errorMessage: string = '';
  
    change() {
      if (this.newpassword !== this.password) {
        this.errorMessage = "Les mots de passe ne correspondent pas.";
      } else {
        this.errorMessage = '';
        // Logique pour changer le mot de passe
        console.log('Mot de passe changé avec succès!');
      }
    }
  
    // Validation methods
    isPersonalInfoValid(): boolean {
      return this.currentCategory.Lastname && this.currentCategory.firstname && this.currentCategory.email && this.currentCategory.roles;
    }
  
    isAuthenticationValid(): boolean {
      return this.newpassword && this.password && this.newpassword === this.password;
    }
  
    goToNextTab(tabView: any, nextIndex: number, currentSection: string) {
      let isValid = false;
      if (currentSection === 'personal') {
        isValid = this.isPersonalInfoValid();
      } else if (currentSection === 'authentication') {
        isValid = this.isAuthenticationValid();
        if (!isValid) {
          this.errorMessage = "Passwords do not match.";
        }
      }
  
      if (isValid) {
        tabView.activeIndex = nextIndex;
        this.errorMessage = null;
      } else {
        this.errorMessage = "Please fill in all required fields.";
      }
    }
}
