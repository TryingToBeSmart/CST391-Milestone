import { Component, Input, OnInit } from '@angular/core';
import { UserMedia } from '../models/user-media-list.model';
import { ApiService } from '../service/api.service';
import { AllMedia } from '../models/all-media.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-media-list',
  templateUrl: './user-media-list.component.html',
  styleUrl: './user-media-list.component.css'
})
export class UserMediaListComponent implements OnInit {
  // @Input() userId!: number;
  // hard coding the userId for now
  userId = 1;

  userMediaList: UserMedia[] = [];
  @Input() allMediaDetails: AllMedia[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchUserMediaList();
  }

  private fetchUserMediaList(): void {
    console.log(`fetchUserMediaList: userId: ${this.userId}`)
    this.apiService.getUserMediaListByUserId(this.userId).subscribe(
      (userMediaList: UserMedia[]) => {
        console.log(userMediaList);
        this.userMediaList = userMediaList;
        console.log(`fetchUserMediaList: userMediaList: ${this.userMediaList}`);
        // Fetch details for each media item in the user's list
        this.fetchAllMediaDetails();
      },
      (error) => {
        console.error('Error fetching user media list:', error);
      }
    );
  }

  private fetchAllMediaDetails(): void {
  // Create an array of observables for each media item
  const mediaObservables = this.userMediaList.map((userMedia: UserMedia) =>
    this.apiService.getAllMediaById(userMedia.allMediaId)
  );

    // Fetch details for each media item in the user's list
    this.userMediaList.forEach((userMedia: UserMedia) => {
      console.log(`fetchAllMediaDetails userMedia.allMediaID: ${userMedia.allMediaId}`);
      this.apiService.getAllMediaById(userMedia.allMediaId).subscribe(
        (mediaDetails: AllMedia) => {
          console.log(`fetchAllMediaDetails mediaDetails: ${mediaDetails}`);
          // Add media details to the array
          this.allMediaDetails.push(mediaDetails);
          console.log(`fetchAllMediaDetails title: ${mediaDetails.title}`);
        },
        (error) => {
          console.error('Error fetching media details:', error);
        }
      );
    });
  }

  removeUserMedia(selectedMedia: AllMedia): void {
    const userMedia: UserMedia = {
      userId: this.userId,
      allMediaId: selectedMedia.id,
    }
    this.apiService.removeUserMediaList(userMedia).subscribe(
      (response) => {
        // Handle success
        console.log('Removed from user media list:', response);
        // Refresh the user media list after removal
        this.fetchUserMediaList();
      },
      (error) => {
        console.error('Error removing from user media list:', error);
      }
    );
  }
}
