import { Component, OnInit, Input } from '@angular/core';
import { Artiste } from 'src/app/models/Artiste';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-artiste-card',
  templateUrl: './artiste-card.component.html',
  styleUrls: ['./artiste-card.component.css']
})
export class ArtisteCardComponent implements OnInit {
  @Input() artiste : Artiste;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  gotoArtiste(id: number) : void{
    console.log(id);
    this.router.navigate(['/artiste', id])

    }

}
