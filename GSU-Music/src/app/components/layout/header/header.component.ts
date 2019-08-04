import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginState:Boolean = false;
  currentUserImage:string = "https://jasonwatmore.com/_content/images/jason-watmore.jpg"
  
  
  
  createNewMusic(){
    console.log("creating new music")
    this.router.navigate(['/new-music'])
  }

  directToLogin(){
    this.router.navigate(['/login'])
    console.log("login")
    this.loginState = true
  }

  directToLogOut(){
    this.router.navigate(['/logout'])
    
    console.log("logout")
    this.loginState = false;
  }

  goHome(){
    console.log("im home");
    this.router.navigate(['/homePage'])
  }
  constructor(private router: Router) { }
  

  ngOnInit() {
     
  }

}
