import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SouscatRoutingModule } from './souscat-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToolbarModule } from 'primeng/toolbar';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { SouslisteComponent } from './sousliste/sousliste.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { DialogSouscatComponent } from './dialog-souscat/dialog-souscat.component';


@NgModule({
  declarations: [
    SouslisteComponent,DialogSouscatComponent
  ],
  imports: [
    CommonModule,
    SouscatRoutingModule,
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
    InputTextModule
  ]
})
export class SouscatModule { }
