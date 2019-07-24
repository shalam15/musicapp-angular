import { Component, OnInit, Input } from '@angular/core';
import { Music } from 'src/app/models/Music';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  @Input() music: Music;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMusic(id: number) : void{
    console.log(id);
    this.router.navigate(['/music', id])

    }

}
