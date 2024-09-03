import { Component, Input} from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service


@Component({
  selector: 'app-dialog-compte',
  templateUrl: './dialog-compte.component.html',
  styleUrls: ['./dialog-compte.component.scss']
})
export class DialogCompteComponent {
  @Input() dialogType: string;
  @Input() selectedUser: any;


  @Input() visible: boolean = false;
  identifier: string = '';

  constructor(private router: Router) { } // Inject the Router

  
  onSubmit() {
    // Logic pour l'envoi de l'email
    console.log(`Email envoyé à : ${this.identifier}`);
    this.router.navigate(['/target-component-route']); // Replace with your actual route

  }

  cancel() {
    this.visible = false;
  }
 
 
}
