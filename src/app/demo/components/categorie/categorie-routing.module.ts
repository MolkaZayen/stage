import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCComponent } from './liste-c/liste-c.component';


const routes: Routes = [
  { path: '', component: ListeCComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
