import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

import {Message} from '../../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages:Message[];
  constructor(
      public dataService: DataService
      )
    {
      this.dataService.getMessages().subscribe(messages => {
        this.messages = messages;
      });
    }

  ngOnInit() {

  }

}
