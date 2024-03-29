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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayAllMediaComponent } from './display-all-media/display-all-media.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserMediaListComponent } from './user-media-list/user-media-list.component';
import { AddToUserListButtonComponent } from './add-to-user-list-button/add-to-user-list-button.component';
import { DatePipe } from '@angular/common';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDisplayAllMediaComponent } from './admin-display-all-media/admin-display-all-media.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DisplayAllMediaComponent,
    SearchBarComponent,
    UserMediaListComponent,
    AddToUserListButtonComponent,
    AdminCreateComponent,
    AdminEditComponent,
    AdminDisplayAllMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CollapseNavbarComponent,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
