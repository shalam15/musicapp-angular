import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicsComponent } from './components/musics/musics.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { HeaderComponent } from './components/layout/header/header.component';
<<<<<<< HEAD
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { ArtisteCardComponent } from './components/artiste-card/artiste-card.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { ArtisteDetailsComponent } from './components/artiste-details/artiste-details.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
=======
>>>>>>> 9032d8dec2f053171dddaf6f106013bc9e25b05c

@NgModule({
  declarations: [
    AppComponent,
    MusicsComponent,
    MusicCardComponent,
<<<<<<< HEAD
    HeaderComponent,
    MusicDetailsComponent,
    ArtisteCardComponent,
    ArtisteComponent,
    ArtisteDetailsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent
=======
    HeaderComponent
>>>>>>> 9032d8dec2f053171dddaf6f106013bc9e25b05c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
