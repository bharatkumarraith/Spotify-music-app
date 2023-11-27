import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { Playlist } from '../model/playlist';

@Component({
  selector: 'app-add-song-in-playlist',
  templateUrl: './add-song-in-playlist.component.html',
  styleUrls: ['./add-song-in-playlist.component.css']
})
export class AddSongInPlaylistComponent {
  playlist:Playlist={}
  playlistAvail:any;
  songs:any;


constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}

songName1 = this.userService.songToAdd ? this.userService.songToAdd.songName : '';
artistName1 = this.userService.songToAdd ? this.userService.songToAdd.artistName : '';
rating = this.userService.songToAdd ? this.userService.songToAdd.rating : '';

  ngOnInit(): void {
   
  //  console.log( this.userService.getSong.songName);
   
   this.userService.getviewPlaylist().subscribe({
    next:data=>{
            this.playlistAvail=data;
            
    }
  
   })
   console.log(this.playlistAvail);

  this.songName1 = '';
  this.artistName1 = '';
  this.rating = '';
   
  }



  addPlaylist = this.fb.group({
    playlistName:["",Validators.required],
    trackDetails:this.fb.array([
      this.fb.group({
        songName:  [this.songName1],
        artistName: [this.artistName1],
        rating: [this.rating]
  })   
    ])
  })
resetForm(){
  this.addPlaylist.reset();
}

  submitPlaylist(){
    this.userService.creatingPlaylist(this.addPlaylist.value).subscribe({
      next:data=>{
         this.playlist=data;
         console.log(this.playlist);
         alert("added successfully");
        this.router.navigateByUrl("/song-in-playlist");
      },error(err) {
        alert("Not added");
      },
    })
    this.addPlaylist.reset();
  }

}
