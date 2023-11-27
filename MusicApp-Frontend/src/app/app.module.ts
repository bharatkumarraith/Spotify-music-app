import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {NgIf} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PlayListComponent } from './play-list/play-list.component';
import { ShowPlaylistComponent } from './show-playlist/show-playlist.component';
import { HomeComponent } from './home/home.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { ShowSongsComponent } from './show-songs/show-songs.component';
import { ViewAllSongsComponent } from './view-all-songs/view-all-songs.component';
import { SpotifyComponent } from './spotify/spotify.component';
import {MatCardModule} from '@angular/material/card';
import { AddSongInPlaylistComponent } from './add-song-in-playlist/add-song-in-playlist.component';
import { ShowSongsInPlaylistComponent } from './show-songs-in-playlist/show-songs-in-playlist.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    PlayListComponent,
    ShowPlaylistComponent,
    HomeComponent,
    CreatePlaylistComponent,
    ShowSongsComponent,
    ViewAllSongsComponent,
    SpotifyComponent,
    AddSongInPlaylistComponent,
    ShowSongsInPlaylistComponent,
  
  ],
  imports: [
    
      // Other route configurations
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    NgIf,
    FormsModule,
    MatRadioModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
