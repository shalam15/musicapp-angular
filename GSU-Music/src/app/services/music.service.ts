import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Music } from '../models/Music'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  errorFromServer:string;
  musicUrl: string = 'http://127.0.0.1:8000/musicmusic/?format=json';
  musicDetailsUrl: string;
  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:  ${JSON.stringify( error.error)}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.'+ JSON.stringify(error.error));
      
  };

  getMusics(): Observable<Music[]> {
    console.log(this.http.get<Music[]>(this.musicUrl.toString()));
    return this.http.get<Music[]>(this.musicUrl)

  }

  /** POST: add a new hero to the database */
postMusic (music: Music): Observable<Music> {
  return this.http.post<Music>(this.musicUrl, music)
    .pipe(
      catchError(
        this.handleError
        
        
        )
    );
    
}
  setMusic(id) {
    this.musicDetailsUrl = 'http://127.0.0.1:8000/musicmusic/' + id + '/?format=json'
  }
  getMusic(id): Observable<Music> {
    this.setMusic(id)
    console.log(this.http.get<Music>(this.musicDetailsUrl));
    return this.http.get<Music>(this.musicDetailsUrl);


  }
}

