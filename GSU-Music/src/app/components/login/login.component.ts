import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

model ={
  "username": "",
  "password": "",
  
}

directTosignup(){

    this.router.navigate(['/signup'])

  }
  onSubmit(){
    console.log("submitted")
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
