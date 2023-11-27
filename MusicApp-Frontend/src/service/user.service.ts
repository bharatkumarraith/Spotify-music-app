import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/model/playlist';
import { song } from 'src/app/model/song';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public check: boolean = false;
  public playlist : any;  
  public songToAdd :any = {};
  public playlistName :any;
  creatingPlaylist(playlist:any){
    // createPlaylist
    let httpHeader = new HttpHeaders({ 
      'Authorization':'Bearer '+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    console.log(playlist);
    return this.httpClient.post("http://localhost:8088/api/v2/creatingPlaylist",playlist,reqOption)
  
  }



  //////


//////////

  songsinPlaylist(){
    // 
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    return this.httpClient.post("http://localhost:8088/api/v2/get/songList",reqOption)
  }


  //viewplaylistofsongs************
apiUrl="http://localhost:8088/api/v2/getSongsForPlaylist";
  getSongsForPlaylist(playlistName: string) {
    // You should send the playlistName as a query parameter
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('Token'),
    });
    return this.httpClient.get(this.apiUrl, {
      headers: headers,
      params: { playlistName: playlistName },
    });
  }
















  addSongToPlaylist(playlist:any){
    //addSongToThatPlaylist
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(playlist + "this is in playlist");
    //return this.httpClient.post("http://localhost:8088/api/v2/addPlaylist",playlist,reqOption);
   return this.httpClient.post("http://localhost:8088/api/v2/addToPlay",playlist,reqOption);
   //return this.httpClient.post("http://localhost:8088/api/v2/addSongToPlaylist",playlist,reqOption);
    //return this.httpClient.post("http://localhost:8088/api/v2/add/play",playlist)
    //return this.httpClient.post("http://localhost:8088/api/v2/add/Playlist",playlist)
    //return this.httpClient.post("http://localhost:8088/api/v2/addSongTrack",playlist)
     //return this.httpClient.post("http://localhost:8088/api/v2/creatingPlaylist",playlist)
  }
  
  getviewPlaylist(){
    // getPlaylist
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    console.log(reqOption);
    return this.httpClient.get("http://localhost:8088/api/v2/viewPlaylist",reqOption)
  }

  getSong: any;
  isLoggedIn:boolean=false;

  constructor(private httpClient:HttpClient,private router:Router) { }
  
  onSuccess(){
    this.isLoggedIn=true;
  }
  onFailure(){
    this.isLoggedIn=false;
  }
  getLoggedIn(){
    return this.isLoggedIn;
  }
  logout(){
    localStorage.removeItem('Token');
    this.router.navigate(['login']);
    console.log(localStorage.getItem('Token'));
  }
  // public userName?:string;

  registerUser(user:any){
    return this.httpClient.post("http://localhost:8088/api/v2/saveDetails",user)
    // return this.httpClient.post("http://localhost:8083/api/v1/user",user)
  }

  login(loginData:any){
    console.log(loginData);
    return this.httpClient.post("http://localhost:8083/api/v1/checkAuth",loginData)
  }

  showAllSongs(): Observable<song[]>{
  return this.httpClient.get<song[]>("http://localhost:8088/api/v2/viewSongs");
  }

  getAllTracks(): Observable<song[]>{
    return this.httpClient.get<song[]>("http://localhost:8088/api/v2/getTrack");
  }
  addSongTrack(playlistName:string){
    return this.httpClient.post("http://localhost:8088/api/v2/addSongTrack",playlistName);
  }
  
  baseurl="http://localhost:8088/api/v2/viewSongs";
  getAllSongs1()
  {
    return this.httpClient.get(this.baseurl);
  }

 
  deletePlaylist(playlistName:any){
    let httpHeader = new HttpHeaders({
      "Authorization":"Bearer "+localStorage.getItem('Token')
    });
    let reqOption  = {headers:httpHeader}
    return this.httpClient.delete(
      `http://localhost:8088/api/v2/deletePlaylist/${playlistName}`, reqOption)
  }

  getAllSongs(){
    return this.httpClient.get(
      `http://localhost:6262/api/v4/get/all-songs`)
  }

url="http://localhost:6262/api/v4"
  addSong(songobj:any)
  {
     let httpheaders=new HttpHeaders({
      'Authorization':'Bearer'+ localStorage.getItem('jwt')
     });
     let requestoptions={headers:httpheaders};
     return this.httpClient.post(this.url+"/addSong",songobj,requestoptions);
  }





//getuserdetails
baseurll="http://localhost:8088/api/v2"
getuserDetails()
{
  let httpHeaders=new HttpHeaders({

    'Authorization':'Bearer '+ localStorage.getItem('jwt')
  });
  let requestoptions={headers:httpHeaders};
  return this.httpClient.get(this.baseurll+"/get-User-Details",requestoptions);
}


//logout*******

logoutUser()
{
   localStorage.removeItem('Token')
  this.router.navigate(['/spotify'])
  console.log(localStorage.getItem('Token'));
 
 
}

Isloggidin()
{
  return !!localStorage.getItem('Token');
}

  }
  

