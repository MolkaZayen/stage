import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AvatarModule } from 'primeng/avatar'; // Import de PrimeNG Avatar pour l'image
import { InputTextModule } from 'primeng/inputtext'; // Import de PrimeNG InputText pour la barre de recherche
import { BadgeModule } from 'primeng/badge'; // Import de PrimeNG Badge pour les badges

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    NavbarRoutingModule,
    AvatarModule, 
    InputTextModule, 
    BadgeModule
  ],
  exports: [
    NavbarComponent // Exporter le NavbarComponent pour qu'il soit disponible dans d'autres modules
  ]
})
export class NavbarModule { }
