import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  model = {
    "username": "",
    "password": "",

  }

  directTosignup() {

    this.router.navigate(['/signup'])

  }
  onSubmit() {
    console.log("submitted")
  }
  input;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
    };
  }

  loginUser() {
    this.userService.loginUser(this.input).subscribe(
      response => {
        this.router.navigate(['/home']);
      },
      error => console.log('error', error)
    );
  }

  toSignup() {
    this.router.navigate(['/']);
  }

}
