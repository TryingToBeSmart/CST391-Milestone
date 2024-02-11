import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AllMedia } from '../models/all-media.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-display-all-media',
  templateUrl: './admin-display-all-media.component.html',
  styleUrl: './admin-display-all-media.component.css'
})
export class AdminDisplayAllMediaComponent {
  @Input() allMedia: AllMedia[] = [];
  @Output() mediaSelected = new EventEmitter<AllMedia>();

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

  selectedMedia(mediaItem: AllMedia): void {
    this.mediaSelected.emit(mediaItem);
  }

}
