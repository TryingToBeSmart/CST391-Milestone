import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllMedia } from '../models/all-media.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private hostUrl = 'http://localhost:5000';

  constructor(private httpClient: HttpClient) { }

  public getAllMedia(): Observable<any> {
    return this.httpClient.get<AllMedia[]>(`${this.hostUrl}/allMedia`);
  }
}
