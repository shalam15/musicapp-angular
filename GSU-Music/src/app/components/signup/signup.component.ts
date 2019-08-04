import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
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
  
  constructor(private router: Router) { 
    this.model = {
      "username":"",
      "password":""
    }
  }

  ngOnInit() {
   
  }

}
