import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  checkLogIn:boolean=false;
  title:String="Spotify";
  type:String="login";
  flag:boolean=false;
  logService: any;
  userName: any ;
  welcome :boolean = false;

  constructor(private route:Router,private userservice:UserService){}//,private logService:LoginService){}
  ngOnInit() {
    this.checkLogIn = this.userservice.check;
   this.userName = localStorage.getItem("user_name");   
 
   if(this.userName != ""){
       this.welcome = true;
   }else{
    this.userName= false;
   }
  }


}
