import { Component, OnInit ,Input} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentUserImage = "https://jasonwatmore.com/_content/images/jason-watmore.jpg"
  

  createNewMusic(){
    console.log("creating new music")
    this.router.navigate(['/new-music'])
  }


  goHome(){
    console.log("im home");
    this.router.navigate(['/homePage'])
  }
  constructor(private router: Router) { 
  }


  ngOnInit() {
  }

}
