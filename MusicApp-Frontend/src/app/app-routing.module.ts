import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanDeactiveGuard } from 'src/guard/can-deactive.guard';
import { PlayListComponent } from './play-list/play-list.component';

import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { HomeComponent } from './home/home.component';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { ViewAllSongsComponent } from './view-all-songs/view-all-songs.component';
import { SpotifyComponent } from './spotify/spotify.component';

import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { AddSongInPlaylistComponent } from './add-song-in-playlist/add-song-in-playlist.component';
import { ShowSongsInPlaylistComponent } from './show-songs-in-playlist/show-songs-in-playlist.component';
import { IsauthGuard } from './auth.guard';



const routes: Routes = [

  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:SpotifyComponent},
  {path:"show-songs",component:ShowSongsComponent,canActivate:[IsauthGuard]},
  {path:"view-all-songs",component:ViewAllSongsComponent,canActivate:[IsauthGuard]},
  {path:"play-list",component:AddSongInPlaylistComponent,canActivate:[IsauthGuard]},
  {path:"create-playlist",component:CreatePlaylistComponent,canActivate:[IsauthGuard]},
  {path:"show-playlist",component:ShowPlaylistComponent,canActivate:[IsauthGuard]},

  // {path:"show-songs-in-playlist",component:ShowSongsInPlaylistComponent},

  {path:"spotify",component:SpotifyComponent},
  // {path:"",redirectTo: "/spotify",pathMatch:"full"},
  // {path:"**",component:HomeComponent},

   
  // {path:"show-playlist",component:ShowPlaylistComponent,canActivate:[AuthguardGuard]},
  // {path:"**",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

