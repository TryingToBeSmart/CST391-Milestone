import { UserMediaListComponent } from './user-media-list/user-media-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-media-list', component: UserMediaListComponent},
  { path: 'all-media', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
