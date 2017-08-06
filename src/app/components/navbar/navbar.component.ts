import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  search:string;
  loggedIn:boolean;

  constructor(
    public flashMessagesService:FlashMessagesService,
    public router:Router
  ) {
    if(localStorage.getItem('loggedIn') == '' || localStorage.getItem('loggedIn') == null){
      this.loggedIn = false;
    }
    else{
      this.loggedIn = true;
    }
  }

  ngOnInit() {
  }

  onLogoutClick(){
    localStorage.setItem('loggedIn','');
    this.flashMessagesService.show("You are logged out", {cssClass:'alert-success', timeout:2000});
    this.router.navigate(['']);
    location.reload();
  }

}
