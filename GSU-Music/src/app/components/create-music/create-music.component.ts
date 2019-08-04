import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/Music';
import { MusicService } from '../../services/music.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-music',
  templateUrl: './create-music.component.html',
  styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent {
  errorMessage: any;
  musics: Music;
  genre: any;


  ngOnInit() {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
      console.log("cond");
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    });


  }

  constructor(private router: Router, private musicService: MusicService) {
    this.genre = ['hipop', 'afro', 'indie', 'k-pop', 'pop'];

  }

  model = new Music(Math.floor(Math.random() * 1000), 'Hi there', 'godNow', true, this.genre, 'nopnopnop', new Date)
  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);
    console.log(this.model);
  }
  onSubmitFinal() {
    const musicsObservable = this.musicService.postMusic(this.model);
    musicsObservable.subscribe(
      (musicData: Music) => {
      this.musics = musicData; console.log(this.musics);
        if (window.confirm("CREATED, GO HOME NOW")) {
          this.router.navigate(['/homePage'])

        } else {
          this.submitted = false

        }
      },
      error => console.log("this is error", this.errorMessage = error),
    );
  }

  generateDateAndTime() {
    console.log("time generated", this.model.dateCreated);
    this.model.dateCreated = new Date;
  }

  clearMusic() {
    console.log("all cleared")
    this.model = new Music(Math.random() * 1000, "", "", false, "", '', new Date)
  }

  goBack() {
    if (window.confirm("Are you sure? your progress is NOT saved!!!")) {
      if (window.confirm("CLICK OK TO DESTROY PROGRESS")) {
        this.router.navigate(['/homePage'])
      }
    }

  }
  get diagnostic() { return JSON.stringify(this.model); }

}
