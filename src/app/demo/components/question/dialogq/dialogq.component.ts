import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogq',
  templateUrl: './dialogq.component.html',
  styleUrls: ['./dialogq.component.scss']
})
export class DialogqComponent {
  @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
  @Input() selectedUser: any = {};
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onAdd = new EventEmitter<any>();
  @Output() onModify = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  newuser: any = {};
  active: number = 0;
  items: any[] = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' }
  ];
  type: string = ''; // Initialize the type property

  TimeOptions = [
    { label: '1min', value: 1 },
    { label: '5min', value: 2 },
    { label: '15min', value: 2 },
  ];

  constructor(private _formBuilder: FormBuilder) {
    // Initialize form groups
    this.firstFormGroup = this._formBuilder.group({
      questionCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      answerCtrl: ['', Validators.required]
    });
  }

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

  onSubmit() {
    console.log('Form submitted with values:', {
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
    });
    this.closeDialog();
  }
}