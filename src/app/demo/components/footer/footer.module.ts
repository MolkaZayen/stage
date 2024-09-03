import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
  FooterComponent,
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
 
  ]
})
export class FooterModule { }
