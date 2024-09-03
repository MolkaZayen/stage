import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import jwtDecode from 'jwt-decode';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    tel:string='';

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {

 this.model = [
            {
                label: 'Menu',
                items: [
                        { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                        
                        { label: 'Users', icon: 'pi pi-fw pi-list', routerLink: ['/user'] },
                        { label: 'login', icon: 'pi pi-fw pi-list', routerLink: ['/firstpage'] },
                        { label: 'Categories', icon: 'pi pi-fw pi-list', routerLink: ['/categorie'] },
                        { label: 'Sub Categories', icon: 'pi pi-fw pi-list', routerLink: ['/souscategorie'] },
                        { label: 'Questions', icon: 'pi pi-fw pi-list', routerLink: ['/question'] },

                        { label: 'Test', icon: 'pi pi-fw pi-list', routerLink: ['/test'] },


                ]

            },

        ]; 
        /*
        this.model = [
            {
                label: 'Menu Group 1',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Users', icon: 'pi pi-fw pi-list', routerLink: ['/user'] },
                    { label: 'login', icon: 'pi pi-fw pi-list', routerLink: ['/firstpage'] },
                ]
            },
            {
                label: 'Menu Group 2',
                items: [
                    { label: 'Categories', icon: 'pi pi-fw pi-list', routerLink: ['/categorie'] },
                    { label: 'Sub Categories', icon: 'pi pi-fw pi-list', routerLink: ['/souscategorie'] },
                    { label: 'Questions', icon: 'pi pi-fw pi-list', routerLink: ['/question'] },
                ]
            },
            { separator: true },
            // Add more groups or items as needed
        ];
        */

    }
}
