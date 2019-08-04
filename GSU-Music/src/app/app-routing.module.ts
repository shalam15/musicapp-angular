import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'
import { MusicDetailsComponent } from './components/music-details/music-details.component'
import { ArtisteDetailsComponent } from './components/artiste-details/artiste-details.component'
import { MusicsComponent } from './components/musics/musics.component'
import { ArtisteComponent } from './components/artiste/artiste.component'
import { LoginComponent } from './components/login/login.component'
import { LogoutComponent } from './components/logout/logout.component'
import { SignupComponent } from './components/signup/signup.component'
import { NotfoundComponent } from './components/notfound/notfound.component'
import { CreateMusicComponent } from './components/create-music/create-music.component'

import { from } from 'rxjs';
const routes: Routes = [
  
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homePage', component: HomepageComponent},
  {path: 'all-artiste', component: ArtisteComponent},
  {path: 'artiste/:id', component: ArtisteDetailsComponent},
  {path: 'all-music', component: MusicsComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'new-music', component: CreateMusicComponent},
  {path: 'signup', component: SignupComponent},


  {path: 'music/:id', component: MusicDetailsComponent},
  // {path: '**', component: NotfoundComponent},
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  login:boolean = false;
  
}
