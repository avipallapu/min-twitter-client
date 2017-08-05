import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers:any[];

  constructor(
    public dataService: DataService
  ) {
    this.dataService.getFollowers().subscribe(followers => {
      this.followers = followers;
    });
  }

  ngOnInit() {
  }

  follow(id:string){
    console.log("the id to follow is "+id);
    this.dataService.follow(id);
    //this.dataService.refresh();
  }

}
