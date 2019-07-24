import { Component, OnInit } from '@angular/core';
// import { Musics } from '../../models/Music'
import { MusicService } from '../../services/music.service';


import { Music } from '../../models/Music';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {
  musics:Music[];

  constructor(private musicService:MusicService) { }

  ngOnInit() {
    // this.musics = this.musicService.getMusics();

    const musicsObservable = this.musicService.getMusics();
    musicsObservable.subscribe((musicData: Music[]) =>{
      this.musics = musicData;
      console.log(this.musics.length);
    });


  }

}
