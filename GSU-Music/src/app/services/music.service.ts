import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import {Music} from '../models/Music'
import { stringify } from '@angular/compiler/src/util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  result:string;
  musicUrl:string = 'http://127.0.0.1:8000/musicmusic/?format=json';
  musicDetailsUrl:string;
  constructor(private http:HttpClient) { }
  // music: Music[] = [
  //   {
  //     id:1,
  //     author:"Drake",
  //     title:"Gods Plan",
  //     image:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
  //     lyrics:"Yeah they wishin' and wishin' and wishin' and wishin'Yeah they wishin' and wishin' and wishin' and wishin",
  //     musicFile:"Godsplan.mp3",
  //     dateCreated: new Date()

  //   },
  //   {
  //     id:2,
  //     author:"Drake",
  //     title:"Needed for what",
  //     image:"https://pbs.twimg.com/profile_images/1800862481/logoisnd_400x400.png",
  //     lyrics:"Yeah they wishin' and wishin' and wishin' and wishin'Yeah they wishin' and wishin' and wishin' and wishin",
  //     musicFile:"Godsplan.mp3",
  //     dateCreated: new Date()

  //   }
  // ]
  getMusics():Observable<Music[]> {
    console.log (this.http.get<Music[]>(this.musicUrl.toString()));
    return this.http.get<Music[]>(this.musicUrl)
    
  }
  // getMusics(): any{
  //   const usersObservable = new Observable(observer =>{
  //     setTimeout(() =>{
  //       observer.next(this.music);
  //     }, 10);
  //   });
  //   return usersObservable;
  // }
  
  setMusic(id){
    this.musicDetailsUrl ='http://127.0.0.1:8000/musicmusic/'+id+'/?format=json'
   }
    getMusic(id) :Observable<Music>{
      this.setMusic(id)
      console.log (this.http.get<Music>(this.musicDetailsUrl));
      return this.http.get<Music>(this.musicDetailsUrl);
    
      
    }
  }

