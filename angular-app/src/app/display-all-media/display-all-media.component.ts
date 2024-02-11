import { Component, Input } from '@angular/core';
import { AllMedia } from '../models/all-media.model';
import { ApiService } from '../service/api.service';
import { Users } from '../models/users.model';

@Component({
  selector: 'app-display-all-media',
  templateUrl: './display-all-media.component.html',
  styleUrl: './display-all-media.component.css'
})
export class DisplayAllMediaComponent {
  @Input() allMedia: AllMedia[] = [];

  // Hard coding user for now; only need the id
  user: Users = {
    id: 1,
    userName: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.apiService.getAllMedia().subscribe(
      (allMedia) => {
        this.allMedia = allMedia;
        console.log(allMedia);
      },
      (error) => {
        console.error(error);
      }
    );
  }


  addToUserMediaList(mediaItem: AllMedia) {
    console.log('Added to user media list:', mediaItem);
  }
}
