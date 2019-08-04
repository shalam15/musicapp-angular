import { Component, OnInit, Input } from '@angular/core';
import { Music } from 'src/app/models/Music';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {

  stateOfPlay: any;
  @Input() music: Music;
  j: number;
  aud: any;
  constructor(private router: Router) {

  }

  ngOnInit() {
    
    this.stateOfPlay = "play";
    this.aud = new Audio(this.music.musicFile);

  }

  gotoMusic(id: number): void {
    console.log(id);
    this.router.navigate(['/music', id])
    

  }


  playAudio() {
    if (this.stateOfPlay === "pause") {
      this.aud.pause();
      this.stateOfPlay = "play";
      console.log('Pausing....', this.music.title);
    }

    else if (this.stateOfPlay === "play") {
      this.aud.play();
      this.stateOfPlay = "pause";
      console.log('Playing....', this.music.title);
    }


  }
}