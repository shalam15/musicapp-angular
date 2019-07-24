import { Injectable } from '@angular/core';
import { Artiste } from '../models/Artiste';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor() { }
  artiste: Artiste[] = [
    {
      id:1,
      firstName:"Cardi",
      lastName:"B",
      worldRank :"2",
      musicGenre :"hiphop",
      origin :"canada",
      originFlag :"blue",
      avatarImage : "../../../assets/cardi.jpg"

    },
    {
      id:2,
      firstName:"Drake",
      lastName:"Ola",
      worldRank :"2",
      musicGenre :"hiphop",
      origin :"canada",
      originFlag :"blue",
      avatarImage : "../../../assets/drake.jpg"
    },
    {
      id:3,
      firstName:"Drake",
      lastName:"Ola",
      worldRank :"2",
      musicGenre :"hiphop",
      origin :"canada",
      originFlag :"blue",
      avatarImage : "../../../assets/drake.jpg"
    },
    {
      id:4,
      firstName:"Drake",
      lastName:"Ola",
      worldRank :"2",
      musicGenre :"hiphop",
      origin :"canada",
      originFlag :"blue",
      avatarImage : "../../../assets/cardi.jpg"
    }
  ]

  getArtiste(): any{
    const usersObservable = new Observable(observer =>{
      setTimeout(() =>{
        observer.next(this.artiste);
      }, 10);
    });
    return usersObservable;
  }
  getArtist(id) : Artiste{
    var artiste = this.artiste.find(t => t.id == parseInt(id))
    console.log(artiste);
    return artiste;
  }

}
