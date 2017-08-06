import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {User} from '../../models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  users:User[];
  loggedIn:boolean;

  constructor(
    public authService:AuthService,
    public router:Router,
    public flashMessagesService:FlashMessagesService
  ) {
    if(localStorage.getItem('loggedIn') == '' || localStorage.getItem('loggedIn') == null){
      this.loggedIn = false;
    }
    else{
      this.loggedIn = true;
    }
  }

  ngOnInit() {
    this.user = new User();
    this.getHeroes();
  }

  getHeroes(): void {
    console.log('Inside LoginComponent - getHeroes');
    //this.authService.getUsers().then(users => this.users = users);
    //console.log(this.users);
  }

  login(){
    console.log('inside LoginComponent - login'+this.user.password);
    if(this.user.username=='' || this.user.username ==null
        || this.user.password=='' || this.user.password ==null){
      this.flashMessagesService.show('Enter the username/password', {cssClass:'alert-danger', timeout:2000});
    }
    else {
      this.authService.login(this.user).subscribe(
        res => {
          if (res.username == '' || res.username == null) {
            this.flashMessagesService.show('Invalid username/password', {cssClass: 'alert-danger', timeout: 2000});
          }
          else {
            localStorage.setItem('loggedIn', 'true');
            this.flashMessagesService.show('you are logged in', {cssClass: 'alert-success', timeout: 2000});
            location.reload();
          }
        },
        err => console.log(err)
      );
    }
  }

  onSubmit():void {
/*    this.authService
      .login(this.model)
      .subscribe(isLoggedIn => {
        if(isLoggedIn) {
          this.flashMessagesService.show('you are logged in', {cssClass:'alert-success', timeout:4000});
          this.router.navigate(['/']);
        }
        else {
          this.flashMessagesService.show('Invalid Details', {cssClass:'alert-danger', timeout:4000});
          this.router.navigate(['/login']);
        }
      });*/
  }

}
