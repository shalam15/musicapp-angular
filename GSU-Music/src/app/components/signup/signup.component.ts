import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  input;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.input = {
      username: '',
      password: '',
      email: '',
    };
  }

  registerUser() {
    this.userService.registerUser(this.input).subscribe(
      response => {
        alert(this.input.username + ', your account has been created.')
      },
      error => console.log('error', error)
    );
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

}
