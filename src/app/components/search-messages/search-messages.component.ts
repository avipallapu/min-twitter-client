import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import { Router } from '@angular/router';
import {Message} from '../../models/message';

@Component({
  selector: 'app-search-messages',
  templateUrl: './search-messages.component.html',
  styleUrls: ['./search-messages.component.css']
})
export class SearchMessagesComponent implements OnInit {
  search:string;
  messages:Message[];
  constructor(
    private router:Router,
    public dataService: DataService) { }

  ngOnInit() {
  }

  searchMessages(){
    this.dataService.getMessagesWithSearch(this.search).subscribe(messages => {
      this.messages = messages;
    });
  }

}
