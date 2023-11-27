import { Component, Input, OnInit } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { song } from '../model/song';
import { CanDeactiveGuard } from 'src/guard/can-deactive.guard';

@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css']
})
export class ShowSongsComponent implements  CanDeactivate<boolean> {
 
  constructor(private user:UserService,private router:Router){
   
  }

  song:any;
  // mySongs:any;
  mySongs:any;
     

  ngOnInit():void
  {
  
 
  }




  creatingPlaylist(){
    console.log(this.mySongs);
    this.user.creatingPlaylist(this.mySongs).subscribe(()=>alert("PlayList Added Successfully"))
    this.router.navigateByUrl("/show-playlist");
  }
  submitStatus:boolean=false;
  logout()
  {
    this.user.logoutUser();
    this.submitStatus=true;
  }


  canDeactivate(): boolean {
    if (!this.submitStatus) {
      return confirm("You have unsaved changes. Are you sure you want to leave?");
    }
    return true;
  }
  
}
