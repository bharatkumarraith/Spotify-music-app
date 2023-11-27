import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserService } from 'src/service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  responseData:any;
  login:User={}

  myToken: any;
  data:any;
  detalis:any;

  constructor(private userService:UserService,private _snackBar:MatSnackBar,private router:Router){}
  // loginCheck(){
  //   this.userService.login(this.login).subscribe({
  //     next:(data: any)=>{
  //         this.responseData=data;
  //         console.log(this.responseData);
          
  //         localStorage.setItem('Token',this.responseData.Token)

  //       this._snackBar.open('Logged In successfully.....', 'success', {
  //         duration: 3000,
  //         panelClass: ['mat-toolbar', 'mat-primary']
  //       });
  //       this.logSer.onSuccess(); //true
  //       this.routeService.navigateByUrl("");
        
  //     },error:(err: any)=>{
  //       this.logSer.onFailure(); //false
  //       alert("Look's like your are not ragistered!!!!");
  //       this.routeService.navigateByUrl("/registration")
  //     }
  //   })
  // }

  ngOnInit():void{
    // if (this.userService.login(this.login)){
    //   this.router.navigateByUrl("/show-songs")
    // }
  }
  openSnackBar() {
    this._snackBar.open('Logged In successfully.....', 'success', {
      duration: 3000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }
 
  submit1(){
  
    this.userService.login(this.login).subscribe({
        next: data =>{
          this.myToken =data;
          localStorage.setItem("Token",this.myToken.token);
          localStorage.setItem("user_name",this.myToken.user_name);
          console.log("Token Generated");
          console.log(data);
          console.log(this.myToken);
          
          this.openSnackBar()
          this.router.navigateByUrl("/show-songs")
          

        //  ,error:(err: any)=>{
        //   this.logSer.onFailure(); //false
        //   alert("Look's like your are not ragistered!!!!");

          // this.router.navigateByUrl("/home")
        }
    })
    // this.router.navigateByUrl("/show-songs")
    // this.logSer.onSuccess(); //true
    //        this.routeService.navigateByUrl('');
  }
  
}
