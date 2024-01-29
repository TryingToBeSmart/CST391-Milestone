import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { AllMedia } from '../models/all-media.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  allMedia: AllMedia[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.getAllMedia().subscribe(
      allMedia => {
        this.allMedia = allMedia;
        console.log(allMedia);
      },
      error => {
        console.error(error);
      }
    );
  }
}
