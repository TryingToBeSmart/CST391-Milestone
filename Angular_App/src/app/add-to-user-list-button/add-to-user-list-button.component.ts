import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { UserMedia } from '../models/user-media-list.model';
import { Users } from '../models/users.model';
import { AllMedia } from '../models/all-media.model';

@Component({
  selector: 'app-add-to-user-list-button',
  templateUrl: './add-to-user-list-button.component.html',
  styleUrl: './add-to-user-list-button.component.css'
})
export class AddToUserListButtonComponent implements OnInit {
  @Input() mediaItem!: AllMedia;
  @Input() user!: Users;
  UserMediaList: UserMedia[] = [];

  isInList: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.checkIsInUserList();
  }

  private checkIsInUserList(): void {
    this.apiService.getUserMediaListByUserId(this.user.id).subscribe(
      (userMediaList: UserMedia[]) => {
        this.isInList = userMediaList.some(userMedia => userMedia.allMediaId === this.mediaItem.id);
      },
      (error) => {
        console.error('Error fetching user media list:', error);
      }
    );
  }

  addToUserMediaList(): void {

    // Get the userId and allMediaID to create a userMedia object
    const userMedia: UserMedia = {
      userId: this.user.id,
      allMediaId: this.mediaItem.id,
    };

    this.apiService.addUserMediaList(userMedia).subscribe(
      (response) => {
        // Handle success
        // Update isInList after successfully adding the item
        this.isInList = true;
        console.log('Added to user media list:', response);
      },
      (error) => {
        console.error('Error adding to user media list:', error);
      }
    );
  }
}
