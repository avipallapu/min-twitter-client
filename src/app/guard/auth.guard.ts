import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private router:Router
  ){}

  canActivate(){
    if(localStorage.getItem('loggedIn') == '' || localStorage.getItem('loggedIn') == null){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

}
