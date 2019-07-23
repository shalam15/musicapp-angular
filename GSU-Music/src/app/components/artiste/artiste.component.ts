import { Component, OnInit } from '@angular/core';
import {ArtisteService } from '../../services/artiste.service';
import {Artiste } from '../../models/Artiste';
import { from } from 'rxjs';

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {
  artistes:Artiste[];
  constructor(private artisteService:ArtisteService) { }

  ngOnInit() {
    this.artistes = this.artisteService.getArtiste();
  }

}
