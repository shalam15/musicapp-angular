import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisteService } from '../../services/artiste.service'
import { Artiste } from 'src/app/models/Artiste';



@Component({
  selector: 'app-artiste-details',
  templateUrl: './artiste-details.component.html',
  styleUrls: ['./artiste-details.component.css']
})
export class ArtisteDetailsComponent implements OnInit {
  artiste: Artiste
  id: String

  constructor(private route: ActivatedRoute,private artisteService: ArtisteService, private router: Router) { 
    this.id = route.snapshot.paramMap.get("id")
  }

  ngOnInit() {
    const artisteObservable = this.artisteService.getArtist(this.id);
    artisteObservable.subscribe((artisteDataDetails: Artiste)=>{
      this.artiste = artisteDataDetails;
    })
  }

  goBack(): void {
    this.router.navigate(['/homePage'])
}
}
