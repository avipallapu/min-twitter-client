import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  following:any[];

  constructor(
    public dataService: DataService
  ) {
    this.dataService.getFollowing().subscribe(following => {
      this.following = following;
    });
  }

  ngOnInit() {
  }

  unfollow(id:string){
    console.log("the id to un follow is "+id);
    this.dataService.unFollow(id);
    this.dataService.refresh();
  }
}
