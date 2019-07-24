import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component'
import { MusicDetailsComponent } from './components/music-details/music-details.component'
import { ArtisteDetailsComponent } from './components/artiste-details/artiste-details.component'
import { MusicsComponent } from './components/musics/musics.component'
import { ArtisteComponent } from './components/artiste/artiste.component'
import { NotfoundComponent } from './components/notfound/notfound.component'


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'all-artiste', component: ArtisteComponent},
  {path: 'artiste/:id', component: ArtisteDetailsComponent},
  {path: 'all-music', component: MusicsComponent},
  {path: 'music/:id', component: MusicDetailsComponent},
  {path: '**', component: NotfoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
