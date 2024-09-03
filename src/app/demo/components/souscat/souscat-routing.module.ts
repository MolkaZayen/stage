import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SouslisteComponent } from './sousliste/sousliste.component';

const routes: Routes = [
  { path : '', component: SouslisteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SouscatRoutingModule { }
