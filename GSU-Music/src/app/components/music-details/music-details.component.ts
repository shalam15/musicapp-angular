import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/Music'
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../../services/music.service'


@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
  music: Music
  id: string

  constructor(private route: ActivatedRoute, private musicService: MusicService, private router: Router) { 
    this.id = route.snapshot.paramMap.get("id");
    
  }
  goBack(): void {
    this.router.navigate(['/'])
}

  ngOnInit() {
    const musicDetailObservable = this.musicService.getMusic(this.id);
    musicDetailObservable.subscribe((musicDataDetails: Music) =>{
      this.music = musicDataDetails;
    

      });
    
  }

}




