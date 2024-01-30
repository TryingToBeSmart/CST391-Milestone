import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseNavbarComponent } from './collapse-navbar/collapse-navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayAllMediaComponent } from './display-all-media/display-all-media.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserMediaListComponent } from './user-media-list/user-media-list.component';
import { AddToUserListButtonComponent } from './add-to-user-list-button/add-to-user-list-button.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DisplayAllMediaComponent,
    SearchBarComponent,
    UserMediaListComponent,
    AddToUserListButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CollapseNavbarComponent,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
