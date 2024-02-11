import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AllMedia } from '../models/all-media.model';
import { UserMedia } from '../models/user-media-list.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private hostUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  //Get all media
  public getAllMedia(): Observable<any> {
    return this.httpClient.get<AllMedia[]>(`${this.hostUrl}/allMedia`);
  }

  public getAllMediaById(mediaId: number): Observable<any> {
    console.log(`api getAllMediaById, mediaId: ${mediaId}`);
    return this.httpClient.get<AllMedia>(`${this.hostUrl}/allMedia/${mediaId}`);
  }

  //Get all user's media list
  getUserMediaListByUserId(userId: number): Observable<any> {
    return this.httpClient.get<UserMedia[]>(`${this.hostUrl}/userMediaList/user/${userId}`);
  }

  //Add media to user's list
  addUserMediaList(userMedia: UserMedia): Observable<any> {
    return this.httpClient.post(`${this.hostUrl}/userMediaList`, userMedia);
  }

  //Remove media from user's list
  removeUserMediaList(userMedia: UserMedia): Observable<any> {
    return this.httpClient.delete(`${this.hostUrl}/userMediaList`, {
      body: userMedia,
    });
  }

  //Add media to the AllMedia table
  createAllMedia(allMedia: AllMedia): Observable<{ id: number }> {
    return this.httpClient.post<{ id: number }>(`${this.hostUrl}/allMedia`, allMedia);
  }

  //Edit AllMedia
  editAllMedia(allMedia: AllMedia): Observable<{ id: number }> {
    return this.httpClient.put<{ id: number }>(`${this.hostUrl}/allMedia/${allMedia.id}`, allMedia);
  }
}
