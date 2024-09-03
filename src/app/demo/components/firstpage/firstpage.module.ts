import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstpageRoutingModule } from './firstpage-routing.module';

import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { LoginComponent } from './login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { DialogCompteComponent } from './dialog-compte/dialog-compte.component';
import { NavbarModule } from '../navbar/navbar.module';




@NgModule({
  declarations: [LoginComponent,DialogCompteComponent]
  ,
  imports: [
    CommonModule,
    FirstpageRoutingModule,
    CommonModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    RadioButtonModule ,
    ToolbarModule,
    PaginatorModule,
    TabViewModule,
    CheckboxModule,
    InputTextModule,
    
    
  ]

})
export class FirstpageModule { }
