import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { Artiste } from '../models/Artiste';

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  artisteUrl:string = 'http://127.0.0.1:8000/artisteartiste/?format=json';
  artisteDetailsUrl:string;

  constructor(private http:HttpClient) { }

  getArtiste():Observable<Artiste[]>{
    console.log(this.http.get<Artiste[]>(this.artisteUrl.toString()))
    return this.http.get<Artiste[]>(this.artisteUrl)
  }
 
  setArtiste(id){
    this.artisteDetailsUrl ='http://localhost:8000/artisteartiste/'+id+'/?format=json'
   }
  getArtist(id) : Observable<Artiste>{
    this.setArtiste(id)
    console.log(this.http.get<Artiste>(this.artisteDetailsUrl));
    return this.http.get<Artiste>(this.artisteDetailsUrl);
  }

}
