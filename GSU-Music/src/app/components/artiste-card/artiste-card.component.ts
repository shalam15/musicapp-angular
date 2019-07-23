import { Component, OnInit, Input } from '@angular/core';
import { Artiste } from 'src/app/models/Artiste';

@Component({
  selector: 'app-artiste-card',
  templateUrl: './artiste-card.component.html',
  styleUrls: ['./artiste-card.component.css']
})
export class ArtisteCardComponent implements OnInit {
  @Input() artiste : Artiste;

  constructor() { }

  ngOnInit() {
  }

}
