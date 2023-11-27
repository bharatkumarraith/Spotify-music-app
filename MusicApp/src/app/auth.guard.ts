import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/service/user.service';



@Injectable({
  providedIn: 'root'
})


class authGuard{
  
  constructor(private userservice:UserService,private router:Router){}
  CanActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.userservice.Isloggidin())
    {
       return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  }

export const IsauthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean => {
  return inject(authGuard).CanActivate(route,state);

}