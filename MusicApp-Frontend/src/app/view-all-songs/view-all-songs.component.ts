import { Component, Input, OnInit } from '@angular/core';
import { song } from '../model/song';
import { Playlist } from '../model/playlist';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import { PlayListComponent } from '../play-list/play-list.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-all-songs',
  templateUrl: './view-all-songs.component.html',
  styleUrls: ['./view-all-songs.component.css']
})
export class ViewAllSongsComponent implements OnInit {

songs:any;

constructor(private service : UserService,private router : Router){}
  ngOnInit() {
    this.service.getAllSongs().subscribe(
      {next:data=>{
        this.songs=data
        console.log(this.songs);
      }
      }
      )
  }

addSongToPlaylist1(song:any){
  alert(`${song.songName} is selected `);
  console.log(song);
  this.service.songToAdd=song;
  console.log(this.service.songToAdd);
  // this.service.addSongToPlaylist(song).subscribe(()=>alert("Song added into PlayList successfully"))
   this.router.navigateByUrl("/play-list");
}
songPlay(songName:any){
    
  alert(`${songName} song is Playing `);
}

 

//   trackName:String|null,
//     artistName:String|null,
//     genres:


addproductform=new FormGroup({
  "songName":new FormControl(),
  "artistName":new FormControl(),
  "rating": new FormControl(),
 
});


Addproduct()
{
  console.log(this.addproductform.value);
  this.service.addSong(this.addproductform.value).subscribe(
    response=>{
      console.log(response);
    
      alert("song is added sucessfully")
 
  })
 
}
}
