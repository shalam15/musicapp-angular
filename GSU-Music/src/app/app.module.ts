import { BrowserModule , } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, ROUTES } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicsComponent } from './components/musics/musics.component';
import { MusicCardComponent } from './components/music-card/music-card.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MusicDetailsComponent } from './components/music-details/music-details.component';
import { ArtisteCardComponent } from './components/artiste-card/artiste-card.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { ArtisteDetailsComponent } from './components/artiste-details/artiste-details.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateMusicComponent } from './components/create-music/create-music.component';

const routes: Routes = [

  // {path: '#', component: HomepageComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    MusicsComponent,
    MusicCardComponent,
    HeaderComponent,
    MusicDetailsComponent,
    ArtisteCardComponent,
    ArtisteComponent,
    ArtisteDetailsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ResetpasswordComponent,
    HomepageComponent,
    NotfoundComponent,
    LogoutComponent,
    CreateMusicComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

