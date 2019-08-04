import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {
  notValid:Boolean;
  model:any;

  signUp() {
    console.log("signed up")
  }
  directToLogin() {
    this.router.navigate(['/login'])
  }
  onSubmit(){
    console.log("submitted");
  }
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.model = {
      username: '',
      password: '',
      email: '',
    };
  }

  registerUser() {
    this.userService.registerUser(this.model).subscribe(
      response => {
        alert(this.model.username + ', your account has been created.')
      },
      error => console.log('error', error)
    );
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
