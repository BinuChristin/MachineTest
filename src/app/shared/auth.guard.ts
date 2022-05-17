import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //create a constructor
  constructor ( public router: Router){

  }
  //admin/manager/coordinator role
  //check roleID here:
  //routes roleId and sessionRole ==true != false
  canActivate(
    route: ActivatedRouteSnapshot) : boolean {
      //expected Role: from url
      const expectedRole = route.data.role;

      //current role: sessionStorage
      const currentRole = sessionStorage.getItem("ACCESS_ROLE");
      
      if(currentRole !==expectedRole){
        this.router.navigateByUrl('login');
        return false;
      }
    return true;
  }
  
}
