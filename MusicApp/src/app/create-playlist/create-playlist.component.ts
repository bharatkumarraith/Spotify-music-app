import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Playlist } from '../model/playlist';
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent {
 
  playlist:Playlist={}
  playlistAvail:any;


  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}


  ngOnInit(): void {
   

   
   this.userService.getviewPlaylist().subscribe({
    next:data=>{
            this.playlistAvail=data;
            
    }
  
   })
   console.log(this.playlistAvail);

   
  }



  addPlaylist = this.fb.group({
    playlistName:["",Validators.required],
    // playlistId:["",Validators.required],
    trackDetails:this.fb.array([
  //     this.fb.group({
  //       songName:  [this.songName1],
  //       artistName: [this.artistName1],
  //       rating: [this.rating]
  // })   
    ])
  })

  get playlistNameValidate(){
    return this.addPlaylist.get('playlistName')
  }

  get playlistIdValidate(){
    return this.addPlaylist.get('playlistId')
  }

resetForm(){
  this.addPlaylist.reset();
}

// creatingPlaylist1(){
//     console.log(this.addPlaylist.value);
//     this.userService.creatingPlaylist(this.addPlaylist.value).subscribe({
//       next:data=>{
//          this.playlist=data;
//         this.router.navigateByUrl("/show-playlist")
//       },error(err) {
//         alert("Not added");
//       },
//     })
//     this.addPlaylist.reset();
//   }

creatingPlaylist1() {
  console.log(this.addPlaylist.value);
  this.userService.creatingPlaylist(this.addPlaylist.value).subscribe({
    next: (data) => {
      this.playlist = data;
      this.router.navigateByUrl("/show-playlist");

      // Use Swal for success message
      Swal.fire({
        title: 'Success!',
        text: 'Playlist added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    },
    error: (err) => {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred. Playlist not added.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  });

  this.addPlaylist.reset();
}

 
}
