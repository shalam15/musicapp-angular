import { Component, OnInit, Input } from '@angular/core';
import { Music } from 'src/app/models/Music';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {
  @Input() music: Music;
  constructor() { }

  ngOnInit() {
  }

}
