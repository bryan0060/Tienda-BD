import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {


  email: string | null = null;
  password: string | null = null;


  constructor(private router: Router) {
  }

  login() {
    if(this.email && this.password){
      this.router.navigate(["/listado"]);
    }
    
  }

}
