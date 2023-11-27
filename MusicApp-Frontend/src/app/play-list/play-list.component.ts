import { Component, OnInit } from '@angular/core';
import { Playlist } from '../model/playlist';
import { UserService } from 'src/service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit{

  
  playlist:Playlist={}
  playlistAvail:any;


  constructor(private fb:FormBuilder,private userService:UserService,private router:Router){}

  // songName1 = this.userService.getSong ? this.userService.getSong.songName : '';
  // artistName1 = this.userService.getSong ? this.userService.getSong.artistName : '';
  // rating = this.userService.getSong ? this.userService.getSong.rating : '';

  ngOnInit(): void {
   
  //  console.log( this.userService.getSong.songName);
   
   this.userService.getviewPlaylist().subscribe({
    next:data=>{
            this.playlistAvail=data;
            
    }
  
   })
   console.log(this.playlistAvail);

  // this.songName1 = '';
  // this.artistName1 = '';
  // this.rating = '';
   
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

  // submitPlaylist(){
  //   console.log(this.addPlaylist.value);
  //   this.userService.creatingPlaylist(this.addPlaylist.value).subscribe({
  //     next:data=>{
  //        this.playlist=data;
  //        alert("added successfully");
       
  //     },error(err) {
  //       alert("Not added");
  //     },
  //   })
  //   this.router.navigateByUrl("/show-playlist");
  //   this.addPlaylist.reset();
  // }

  submitPlaylist() {
    console.log(this.addPlaylist.value);
    this.userService.creatingPlaylist(this.addPlaylist.value).subscribe({
      next: data => {
        this.playlist = data;
        alert("added successfully");
        this.addPlaylist.reset();
        this.router.navigateByUrl("/show-playlist");
      },
      error: err => {
        alert("Not added");
      },
    });
  }
  

 
 
}
