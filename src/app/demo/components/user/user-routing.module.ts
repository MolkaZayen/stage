import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesComponent } from './listes/listes.component';

const routes: Routes = [
  { path: '', component: ListesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
