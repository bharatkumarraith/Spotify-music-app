import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,  CanDeactivate,  RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { RegisterComponent } from "src/app/register/register.component";
import { ShowSongsComponent } from "src/app/show-songs/show-songs.component";
import { UserService } from "src/service/user.service";
@Injectable({
  providedIn: 'root'
})

export class CanDeactiveGuard implements CanDeactivate<ShowSongsComponent> {

  constructor(private loginAuth: UserService) { }

  canDeactivate(

    component: ShowSongsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return component.canDeactivate?component.canDeactivate():true;
  }

}