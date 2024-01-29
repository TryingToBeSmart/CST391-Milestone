import { UserMediaListComponent } from './user-media-list/user-media-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DisplayAllMediaComponent } from './display-all-media/display-all-media.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-media-list', component: UserMediaListComponent},
  { path: 'all-media', component: DisplayAllMediaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
