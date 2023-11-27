import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent {
  playlistAvail:any;
  
  
  constructor(private userSer:UserService,private router:Router){
   
  }
  

  ngOnInit(){
     
     this.userSer.getviewPlaylist().subscribe(data=>{this.playlistAvail=data
    console.log(data)});

    this.songs();
 
  }
 
    deletePlaylists( playlist:any){
      console.log(this.playlistAvail)
      this.userSer.deletePlaylist(playlist).subscribe(
        data=>{
          this.playlistAvail=data
          
        location.reload();
          alert("deleted successfully!!!!")
        })
      }
    




      songListOfSong:any;
      playlistName:any;
              show:boolean=false;

      songs() {
        this.userSer.getSongsForPlaylist(this.playlistAvail).subscribe((data) => {
          this.songListOfSong = data;
          console.log(data); // Print the data to the console
        });
      }

// shows()
// {
//   this.show=true;
// }



showTrackDetails: boolean = false;

// Function to toggle the visibility
shows(playlist: any) {
  playlist.showTrackDetails = !playlist.showTrackDetails;
}



    }

