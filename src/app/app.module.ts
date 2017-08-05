import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { MessagesComponent } from './components/messages/messages.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchMessagesComponent } from './components/search-messages/search-messages.component';
import { LoginComponent } from './components/login/login.component';



const appRoutes: Routes = [
  { path:'', component:LoginComponent},
  { path:'messages', component:MessagesComponent},
  { path:'followers', component:FollowersComponent },
  { path:'following', component:FollowingComponent },
  { path:'search-messages',component:SearchMessagesComponent},
  { path:'**', component:PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MessagesComponent,
    FollowersComponent,
    FollowingComponent,
    PageNotFoundComponent,
    SearchMessagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
