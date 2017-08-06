import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { MessagesComponent } from './components/messages/messages.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchMessagesComponent } from './components/search-messages/search-messages.component';
import { LoginComponent } from './components/login/login.component';
import { PopularComponent } from './components/popular/popular.component';
import { AuthGuard } from './guard/auth.guard';



const appRoutes: Routes = [
  { path:'', component:LoginComponent},
  { path:'messages', component:MessagesComponent, canActivate:[AuthGuard]},
  { path:'followers', component:FollowersComponent, canActivate:[AuthGuard] },
  { path:'following', component:FollowingComponent, canActivate:[AuthGuard] },
  { path:'search-messages',component:SearchMessagesComponent, canActivate:[AuthGuard]},
  { path:'popular',component:PopularComponent, canActivate:[AuthGuard]},
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
    LoginComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    FlashMessagesModule
  ],
  providers: [
    DataService,
    AuthService,
    AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }
