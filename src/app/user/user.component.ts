import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthInterceptor } from '../_auth/auth.interceptor';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{

  message: any;
  
  constructor(
    private userServicve: UserService,
    private authInterceptor: AuthInterceptor
  ){}

  ngOnInit(): void {
    this.forUser();
  }

  forUser() {
    this.userServicve.forUser().subscribe( (response: any) => {
      console.log(response);
      this.message = response;
      
    }, (error) => {
      console.log(error)
    })
  }
}
