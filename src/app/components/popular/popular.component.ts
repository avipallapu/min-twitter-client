import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {PopularFollower} from '../../models/popularFollower';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popularFollowers:PopularFollower[]
  constructor(
    public dataService: DataService
  )
  {
    this.dataService.getPopularFollowers().subscribe(popularFollowers => {
      this.popularFollowers = popularFollowers;
    });
  }

  ngOnInit() {
  }

}
