import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


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
