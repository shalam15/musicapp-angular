



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {

  constructor() { }

  getArtiste(){
    return [
      {
        firstName:"Cardi",
        lastName:"B",
        worldRank :"2",
        musicGenre :"hiphop",
        origin :"canada",
        originFlag :"blue",
        avatarImage : "../../../assets/cardi.jpg"

      },
      {
        firstName:"Drake",
        lastName:"Ola",
        worldRank :"2",
        musicGenre :"hiphop",
        origin :"canada",
        originFlag :"blue",
        avatarImage : "../../../assets/drake.jpg"
      },
      {
        firstName:"Drake",
        lastName:"Ola",
        worldRank :"2",
        musicGenre :"hiphop",
        origin :"canada",
        originFlag :"blue",
        avatarImage : "../../../assets/drake.jpg"
      },
      {
        firstName:"Drake",
        lastName:"Ola",
        worldRank :"2",
        musicGenre :"hiphop",
        origin :"canada",
        originFlag :"blue",
        avatarImage : "../../../assets/cardi.jpg"
      }
    ]
  }
}
