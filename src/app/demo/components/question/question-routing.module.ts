import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QlisteComponent } from './qliste/qliste.component';

const routes: Routes = [
  { path: '', component: QlisteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
