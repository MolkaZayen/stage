import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: any[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'User',
        icon: 'pi pi-user',
        items: [
          { label: 'Profile', icon: 'pi pi-user-edit', routerLink: '/user/profile' },
          { label: 'Settings', icon: 'pi pi-cog', routerLink: '/user/settings' }
        ]
      },
      {
        label: 'Help',
        icon: 'pi pi-question-circle',
        routerLink: '/help'
      }
    ];
  }
}
