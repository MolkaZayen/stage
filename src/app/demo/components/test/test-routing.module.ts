import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestlistComponent } from './testlist/testlist.component';

const routes: Routes = [
  { path: '', component:TestlistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
