import {Injectable} from '@angular/core';
import {Question} from '../models/Question';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Message} from '../models/message';

@Injectable()
export class DataService {
  questions: Question[];
  messages:Message[];
  url:string;

  constructor(
    private http: Http) {

  }

  public getFollowers() {
    console.log("dataservice getFollower entered ");
    return this.http.get(`http://localhost:8080/followers`)
      .map(res => res.json());
  }

  public getFollowing() {
    console.log("dataservice getFollowing entered ");
    return this.http.get(`http://localhost:8080/following`)
      .map(res => res.json());
  }

  public getMessages() {
    console.log("dataservice getMessages entered ");
    this.url = `http://localhost:8080/messages`;
    return this.http.get(this.url)
      .map(res => res.json());
  }

  public getMessagesWithSearch(search:string) {
    console.log("dataservice getMessagesWithSearch entered with search string "+search);
    this.url = `http://localhost:8080/messages?search=`+search;
    return this.http.get(this.url)
      .map(res => res.json());
  }

  public getPopularFollowers() {
    console.log("dataservice getPopularFollowers entered ");
    this.url = 'http://localhost:8080/popular/';
    console.log(this.url);
    return this.http.get(this.url)
      .map(res => res.json());
  }

  public follow(id) {
    console.log("dataservice follow entered ");
    this.url = 'http://localhost:8080/follow/'+id;
    console.log(this.url);
    return this.http.post(this.url,id);
  }

  public unFollow(id) {
    console.log("dataservice unFollow entered ");
    this.url = 'http://localhost:8080/unfollow/'+id;
    console.log(this.url);
    return this.http.delete(this.url)
      .subscribe((res) => {
      });
  }

  refresh(): void {
    window.location.reload();
  }

}
