import { Component, Input, OnInit } from '@angular/core';
import { UserMedia } from '../models/user-media-list.model';
import { ApiService } from '../service/api.service';
import { AllMedia } from '../models/all-media.model';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';

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
  allMedia: any;

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

        this.updateMediaDetails();

        console.log(`fetchUserMediaList: userMediaList: ${this.userMediaList}`);
      },
      (error) => {
        console.error('Error fetching user media list:', error);
      }
    );
  }
  private updateMediaDetails(): void {
    this.userMediaList.forEach((userMedia) => {
      const mediaId = userMedia.allMediaId; // Assuming mediaId is a property in your UserMedia model

      this.apiService.getAllMediaById(mediaId).subscribe(
        (response: any) => { // Update 'any' to the correct type based on your API response
          if (response.length > 0) {
            // Assuming the response contains properties like 'title', 'type', 'releaseDate'
            userMedia.title = response[0].title;
            userMedia.type = response[0].type;
            userMedia.releaseDate = response[0].releaseDate;
          }
        },
        (error) => {
          console.error('Error fetching media details:', error);
        }
      );
    });
  }

  // private updateMediaDetails(): void {
  //   this.userMediaList.forEach(userMediaItem => {
  //     console.log(`userMediaItem: ${userMediaItem.allMediaId}`);
  //     this.apiService.getAllMediaById(userMediaItem.allMediaId, (returnedMedia: AllMedia) => {
  //       console.log(`returnedMedia: ${returnedMedia.title}`);
  //     });
  //   });
  // }

  // private updateMediaDetails(): void {
  //   this.userMediaList.forEach(userMedia => {
  //     this.apiService.getAllMediaById(userMedia.allMediaId).subscribe(
  //       (media: AllMedia) => {
  //         console.log(`updateMediaDetails received: ${media.title}`);
  //         // Check if media is defined before updating properties
  //         if (media) {
  //           userMedia.title = media.title;
  //           userMedia.type = media.type;
  //           userMedia.releaseDate = media.releaseDate;
  //         } else {
  //           // Handle the case where media is not found
  //           userMedia.title = 'N/A';
  //           userMedia.type = 'N/A';
  //           userMedia.releaseDate = new Date();
  //         }
  //       },
  //       (error) => {
  //         console.error('Error fetching media by ID', error);
  //       }
  //     );
  //   });
  // }

  // getReleaseDate(userMedia: UserMedia): Observable<string> {
  //   console.log(`Executing getReleaseDate function with: ${userMedia.allMediaId}`);
  //   return this.apiService.getAllMediaById(userMedia.allMediaId).pipe(
  //     map((allMedia: AllMedia) => {
  //       console.log('API response for release date:', allMedia);
  //       return this.datePipe.transform(allMedia.releaseDate, 'MM/dd/yyyy') as string;
  //     }),
  //     catchError((error) => {
  //       console.error(`Error fetching release date for userMediaId ${userMedia.allMediaId}:`, error);
  //       return of('N/A');
  //     })
  //   );
  // }

  // getTitle(userMedia: UserMedia): Observable<string> {
  //   return this.apiService.getAllMediaById(userMedia.allMediaId).pipe(
  //     map((allMedia: AllMedia) => allMedia.title),
  //     catchError((error) => {
  //       console.error(`Error fetching title for userMediaId ${userMedia.allMediaId}:`, error);
  //       return of('N/A'); // Provide a default value if there's an error
  //     })
  //   );
  // }

  // getType(userMedia: UserMedia): Observable<string> {
  //   return this.apiService.getAllMediaById(userMedia.allMediaId).pipe(
  //     map((allMedia: AllMedia) => allMedia.type),
  //     catchError((error) => {
  //       console.error(`Error fetching type for userMediaId ${userMedia.allMediaId}:`, error);
  //       return of('N/A'); // Provide a default value if there's an error
  //     })
  //   );
  // }

  // getTitle(userMedia: UserMedia): string {
  //   let title = 'N/A';
  //   this.apiService.getAllMediaById(userMedia.allMediaId).subscribe(
  //     (data: AllMedia) => {
  //       title = data ? data.title : 'N/A';
  //     },
  //     (error) => {
  //       console.error('Error fetching media by ID', error);
  //     }
  //   );
  //   return title;
  // }

  // getType(userMedia: UserMedia): string {
  //   let type = 'N/A';
  //   this.apiService.getAllMediaById(userMedia.allMediaId).subscribe(
  //     (data: AllMedia) => {
  //       type = data ? data.type : 'N/A';
  //     },
  //     (error) => {
  //       console.error('Error fetching media by ID', error);
  //     }
  //   );
  //   return type;
  // }

  // getReleaseDate(userMedia: UserMedia): string {
  //   let releaseDate = 'N/A';
  //   this.apiService.getAllMediaById(userMedia.allMediaId).subscribe(
  //     (data: AllMedia) => {
  //       releaseDate = data ? data.releaseDate.toDateString() : 'N/A';
  //     },
  //     (error) => {
  //       console.error('Error fetching media by ID', error);
  //     }
  //   );
  //   return releaseDate;
  // }


  removeUserMedia(selectedMedia: UserMedia): void {
      const userMedia: UserMedia = {
        userId: selectedMedia.userId,
        allMediaId: selectedMedia.allMediaId,
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
