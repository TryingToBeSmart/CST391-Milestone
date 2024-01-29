import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.apiService.getAllMedia().subscribe(
      allMedia => {
        console.log(allMedia);
      },
      error => {
        console.error(error);
      }
    );
  }
}
