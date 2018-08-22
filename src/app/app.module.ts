import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import {TimeAgoPipe} from 'time-ago-pipe';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Http, Headers } from '@angular/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDirective } from './user.directive';
import { UserComponent } from './user/user.component';
import {RoutingModule} from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    UserDirective,
    UserComponent,
    TimeAgoPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    NgxPaginationModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

