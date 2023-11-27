import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-show-songs-in-playlist',
  templateUrl: './show-songs-in-playlist.component.html',
  styleUrls: ['./show-songs-in-playlist.component.css']
})
export class ShowSongsInPlaylistComponent implements OnInit {
  constructor(private userService:UserService,private router:Router){}
songListOfSong:any;
playlistName:any;
  ngOnInit(): void {
    // this.userService.getSongsForPlaylist(this.playlistName).subscribe((data) => {
    //   this.songListOfSong = data;
    // });
  }


}
